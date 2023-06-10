type AxiosOptions = {
    headers: {
        "User-Agent": string;
    };
    params: {
        q: string;
        tbm: string;
        hl: string;
        gl: string;
        start: number;
        filter: number;
    };
}

type SearchRequest = {
    searchStr: string;
}