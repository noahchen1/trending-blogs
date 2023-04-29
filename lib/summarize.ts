import { Configuration, OpenAIApi } from "openai";

const KEY = process.env.NEXT_PUBLIC_GPT_KEY;

const getSummary = async (input: string) => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: KEY
    }));

    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${input}` }]
    }).then(res => {
        console.log(res)
    })
};

export default getSummary;