"use client"

import { SetStateAction, createContext, useState, Context, useContext } from "react"
import { Children, SummaryContextType } from "./types";

const initialState: SummaryContextType = {
    summary: '',
    setSummary: (value: SetStateAction<string>) => {}
}

const SummaryContext: Context<SummaryContextType> = createContext(initialState);

export function useSummaryProvider(): SummaryContextType {
    return useContext(SummaryContext);
}

export function SummaryProvider ({ children }: Children): JSX.Element {
    const [summary, setSummary] = useState<string>('');

    return (
        <SummaryContext.Provider value={{ summary, setSummary }}>
            {children}
        </SummaryContext.Provider>
    )
}