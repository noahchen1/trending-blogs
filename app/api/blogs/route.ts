import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const KEY = process.env.NEXT_PUBLIC_GPT_KEY;
    const res = await request.json();
    const blog = res.blog;
    let summary;

    const openai = new OpenAIApi(new Configuration({
        apiKey: KEY
    }));

    await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${blog}` }]
    }).then(res => {
        summary = res.data.choices[0]?.message?.content

    }).catch(err => console.log(err))



    return NextResponse.json({ summary: summary })
}