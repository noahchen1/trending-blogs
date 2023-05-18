"use client"

import { createContext, useContext, useState, Context, SetStateAction } from "react";
import { SearchContextType, Children } from "./types"

const initialResultState: SearchResult = {
    status: "",
    totalResults: 0,
    articles: []
};

const initialSearchItemState: SearchItem = "";

const initContextState: SearchContextType = {
    results: initialResultState,
    setResults: (value: SetStateAction<SearchResult>) => {},
    searchItem: initialSearchItemState,
    setSearchItem: (value: SetStateAction<SearchItem>) => {}
};

const SearchContext: Context<SearchContextType> = createContext<SearchContextType>(initContextState);

export function useSearchProvider(): SearchContextType {
    return useContext(SearchContext);
};

export function SearchProvider({ children }: Children): JSX.Element {
    const [searchItem, setSearchItem] = useState('');
    const [results, setResults] = useState<SearchResult>(initialResultState);

    return (
        <SearchContext.Provider value={{ results, setResults, searchItem, setSearchItem }}>
            {children}
        </SearchContext.Provider>
    );
};