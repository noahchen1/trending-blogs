type Article = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

type SearchResult = {
    status: string;
    totalResults: number;
    articles: Article[];
}

type SearchItem = string



