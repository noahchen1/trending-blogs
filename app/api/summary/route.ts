import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const summarize = require('text-summarization');

    try {
        const req = await request.json();
        const content = req.content;

        const summary = await summarize(content);

        console.log(summary)

        if (!summary) {
            return NextResponse.json("Summary not found", { status: 400 });
        }

        return NextResponse.json({ summary });
    } catch (err) {
        console.error("An error occurred:", err);
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
}
