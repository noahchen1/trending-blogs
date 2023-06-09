import getPosts from "@/lib/getPosts";
import getContent from "@/lib/getContent";
import getDate from "@/lib/getDate";
import Link from "next/link";

type Params = {
    params: {
        searchItem: SearchItem,
        blogIdx: number
    }
}

const page = async ({ params: { searchItem, blogIdx } }: Params) => {
    const decodedSearchItem = decodeURIComponent(searchItem);
    const posts: SearchResult = await getPosts(decodedSearchItem);
    const articles: Article[] = posts.articles;
    const selectedArticle: Article = articles[blogIdx];
    const title: string = selectedArticle.title;
    const url: string = selectedArticle.url;
    const content: Content = await getContent(url);
    const imgUrl: string = selectedArticle.urlToImage;
    const date: string = getDate(selectedArticle.publishedAt);
    const author: string = selectedArticle.author;

    return (
        <div className="container my-24 px-6 mx-auto">
            <Link href={`/${searchItem}/${blogIdx}/summary`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">summary</Link>
            <section className="mb-32 text-gray-800">
                <img src={imgUrl} className="w-full shadow-lg rounded-lg mb-6" alt="" />
                <div className="flex items-center mb-6">
                    <div>
                        <span> Published {date} by </span>
                        <a href="#!" className="font-medium">{author}</a>
                    </div>
                </div>
                <h1 className="font-bold text-3xl mb-6">{title}</h1>
                <div className="[&_p]:my-4" dangerouslySetInnerHTML={{__html: content.htmlContent}} />
            </section>
        </div>
    )
}

export default page;