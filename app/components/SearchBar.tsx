"use client"

import { useEffect } from "react";
import { useSearchProvider } from "../context/SearchProvider";
import getPosts from "@/lib/getPosts";

export default function SearchBar(): JSX.Element {
    const { searchItem, setSearchItem, setResults } = useSearchProvider();

    useEffect(() => {
        if (!searchItem) return;

        const getData: NodeJS.Timeout = setTimeout(async ()=> {
            try {
                const posts: SearchResult = await getPosts(searchItem);

                setResults(posts);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        }, 1000);

        return () => clearTimeout(getData);

    }, [searchItem]);


    return (
        <>
            <div className="mx-auto lg:w-1/2 w-3/4 mt-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        onChange={e => setSearchItem(e.target.value)}
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>
        </>

    )
}
