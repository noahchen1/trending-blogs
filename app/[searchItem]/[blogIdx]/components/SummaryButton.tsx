"use client"

import { useSummaryProvider } from "@/app/context/SummaryProvider"

type Props = {
    content: string
}

const SummaryButton = ({ content }: Props): JSX.Element => {
    const { setSummary } = useSummaryProvider();

    const getSummary = async () => {
        const request = {
            content: content
        }

        try {
            const res = await fetch('http://localhost:3000/api/summary', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request)
            });

            const data = await res.json();

            setSummary(data.summary);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button
            onClick={() => getSummary()}
        >
            Summary
        </button>
    )
}

export default SummaryButton