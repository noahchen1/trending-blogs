const KEY = process.env.NEXT_PUBLIC_NEWS_KEY;

const getPosts = async (input: string) => {
    const API_URL = `https://newsapi.org/v2/everything?q=${input}&sortBy=popularity&apiKey=${KEY}`;
    
    fetch(API_URL)
        .then(res => res.json())
        .then(data => console.log(data.articles))
};

export default getPosts;