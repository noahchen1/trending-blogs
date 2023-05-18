"use client"

import { Key, useState } from "react";
import { useSearchProvider } from "./context/SearchProvider"
import Blog from "./components/Blog";

export default function Home(): JSX.Element {
  const { results } = useSearchProvider();

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {results.articles.map((article: Article, idx: Key) => {
            return (
              <Blog
                key={idx}
                article={article} 
                blogIdx={idx}               
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
