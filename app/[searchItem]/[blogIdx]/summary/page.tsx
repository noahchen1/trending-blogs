

import getPosts from "@/lib/getPosts";
import getContent from "@/lib/getContent";
import getDate from "@/lib/getDate";

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

    const imgUrl: string = selectedArticle.urlToImage;
    const date: string = getDate(selectedArticle.publishedAt);
    const author: string = selectedArticle.author;

    const getSummary = async () => {

        try {
            const content: Content = await getContent(url);
            const request = { content: content.textContent };
    
            const res = await fetch('http://localhost:3000/api/summary', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request),
            });
    
            if (!res.ok) throw new Error(`Requst failed with status: ${res.status}`);
    
            const data = await res.json();
    
    
            return data;
        } catch (err) {
            console.error("An error occured:", err);
        }


    }

    const summary = await getSummary();

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800">
                <img src={imgUrl} className="w-full shadow-lg rounded-lg mb-6" alt="" />
                <div className="flex items-center mb-6">
                    <div>
                        <span> Published {date} by </span>
                        <a href="#!" className="font-medium">{author}</a>
                    </div>
                </div>
                <h1 className="font-bold text-3xl mb-6">{title}</h1>
                <div>{summary}</div>
            </section>
        </div>
    )
}

export default page