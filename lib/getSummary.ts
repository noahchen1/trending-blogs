import { Configuration, OpenAIApi } from "openai";
import { prompt } from "@/config/gptConfig";

const KEY = process.env.NEXT_PUBLIC_GPT_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const generateChatResponse = async (message) => {
    const data = {
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant.'
            },
            {
                role: "user",
                content: message
            }
        ]
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${KEY}`
            },
            body: JSON.stringify(data)
        });

        const { choices } = await response.json();
        const chatResponse = choices[0].message.content;
        return chatResponse;

    } catch(error) {
        console.error(error)
    }


};

export default generateChatResponse;