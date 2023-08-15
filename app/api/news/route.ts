const axios = require('axios');
const cheerio = require('cheerio');
import { NextResponse } from "next/server";

export async function POST(request: Request, res: Response) {
    const req = await request.json();
    const searchStr = req.searchStr;

    const KEY = process.env.SERP_KEY;
    const SerpApi = require("google-search-results-nodejs");
    const search = new SerpApi.GoogleSearch(KEY);        //your API key from serpapi.com

    const params = {
        engine: "google",                                     // search engine
        q: searchStr,                                      // search query
        google_domain: "google.com",                          // google domain: google.com, google.de, google.fr
        gl: "us",                                             // parameter defines the country to use for the Google search
        hl: "en",                                             // Parameter defines the language to use for the Google search
        tbm: "nws",                                            // parameter defines the type of search you want to do ("nws" means news)
        num: "100"
    };

    const getNewsData = function ({ news_results }) {
        return news_results.map((result) => {
            const { link, title, source, date, snippet, thumbnail: image = "No image" } = result;
            return {
                link,
                source,
                title: title.replace('\n', ''),
                snippet: snippet.replace('\n', ''),
                image,
                date,
            }
        })
    };

    const getJson = (params) => {
        return new Promise((resolve) => {
            search.json(params, resolve);
        })
    }

    try {
        const searchJson = await getJson(params);
        const data = await getNewsData(searchJson);

        console.log(data)
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json({
            message: err
        })
    }
}
