"use client"

import { useSummaryProvider } from "@/app/context/SummaryProvider"

const Summary = () => {
  const { summary } = useSummaryProvider();

  return (
    <div>{summary}</div>
  )
}

export default Summary;