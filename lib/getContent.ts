const axios = require('axios')
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

const getContent = async (url: string): Promise<string> => {
    const res = await axios.get(url);
    const html = res.data;

    let dom = new JSDOM(html, {
        url: url
    });

    let article = new Readability(dom.window.document).parse();

    return article?.textContent
}



export default getContent