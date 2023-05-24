import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const KEY = process.env.NEXT_PUBLIC_GPT_KEY;
    const req = await request.json();
    const content = req.content;
    const openai = new OpenAIApi(new Configuration({
        apiKey: KEY
    }));

    try {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Summarize the following article: ${content}` }]
        });
        const summary = res.data.choices[0]?.message?.content;
        
        return NextResponse.json({ summary: summary });
    } catch(err) {
        console.error(err)
    }
}