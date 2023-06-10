const axios = require('axios');
const cheerio = require('cheerio');
import { NextResponse } from "next/server";

export async function POST(request: Request, res: Response) {
    const req = await request.json();
    const searchStr = req.searchStr;

    const encodedString: string = encodeURI(searchStr);
    const AXIOS_OPTIONS: AxiosOptions = {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
        },                                                  // adding the User-Agent header as one way to prevent the request from being blocked
        params: {
            q: encodedString,                               // our encoded search string        
            tbm: "nws",                                     // parameter defines the type of search you want to do ("nws" means news)
            hl: 'en',                                       // Parameter defines the language to use for the Google search
            gl: 'us',                                        // parameter defines the country to use for the Google search
            start: 0,         // number page by default up to 0
            filter: 0         // shows more than 10 pages. By default up to ~10-15 if filter = 1.
        },
    };

    try {
        const res = await axios.get(`http://google.com/search`, AXIOS_OPTIONS)
        const data = res.data;
        const $ = cheerio.load(data);
        const pattern = /s='(?<img>[^']+)';\w+\s\w+=\['(?<id>\w+_\d+)'];/gm;
        const images = [...data.matchAll(pattern)].map(({ groups }) => ({ id: groups.id, img: groups.img.replace('\\x3d', '') }))
        const allNewsInfo = Array.from($('.WlydOe')).map((el) => {
            return {
                link: $(el).attr('href'),
                source: $(el).find('.MgUUmf').text().trim(),
                title: $(el).find('.n0jPhd').text().trim().replace('\n', ''),
                snippet: $(el).find('.GI74Re').text().trim().replace('\n', ''),
                image: images.find(({ id, img }) => id === $(el).find('.uhHOwf img').attr('id'))?.img || "No image",
                date: $(el).find('.OSrXXb span').text().trim(),
            }
        });

        return NextResponse.json(allNewsInfo);
    } catch (err) {
        return NextResponse.json({
            message: "Bad request"
          }, {
            status: 400,
          })
    }
}
