const KEY: string = process.env.NEXT_PUBLIC_NEWS_KEY!;

const getPosts = async (input: string) => {
    const apiUrl: string = "https://newsapi.org/v2/everything";
    const params: SearchParams = {
        q: input,
        apiKey: KEY,
        sourtBy: "popularity",
        pageSize: "20"
    };

    const getCompleteUrl = (): URL=> {
        const url: URL = new URL(apiUrl);

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        return url;
    };

    const res: Response = await fetch(getCompleteUrl());
    const data: Promise<SearchResult> = res.json();

    return data;
};

export default getPosts;