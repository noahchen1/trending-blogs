import { Dispatch, SetStateAction, ReactNode } from "react";

export type SearchContextType = {
    results: SearchResult
    setResults: Dispatch<SetStateAction<SearchResult>>
    searchItem: SearchItem
    setSearchItem: Dispatch<SetStateAction<SearchItem>>
};

export type SummaryContextType = {
    summary: string;
    setSummary: Dispatch<SetStateAction<string>>
}

export type Children = {
    children: ReactNode
}
