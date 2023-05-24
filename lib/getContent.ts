const axios = require('axios')
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

const getContent = async (url: string): Promise<Content> => {
    const res = await axios.get(url);
    const html = res.data;

    let dom = new JSDOM(html, {
        url: url
    });

    let article = new Readability(dom.window.document).parse();

    const result: Content = {
        htmlContent: article?.content,
        textContent: article?.textContent
    }

    return result;
}

export default getContent;