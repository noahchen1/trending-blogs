import getPosts from "@/lib/getPosts";
import getContent from "@/lib/getContent";

type Params = {
    params: {
        searchItem: SearchItem,
        blogIdx: number
    }
}

const page = async ({ params: {searchItem, blogIdx} }: Params) => {
    const decodedSearchItem = decodeURIComponent(searchItem);
    const posts: SearchResult = await getPosts(decodedSearchItem);
    const articles: Article[] = posts.articles;

    const selectedArticle: Article = articles[blogIdx];
    const title: string = selectedArticle.title;
    const url: string = selectedArticle.url;
    const content: string = await getContent(url);

    return (
        <>
            <h1>{title}</h1>
            <p>{`${content}`}</p>
        </>
    )
}

export default page;