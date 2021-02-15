export type YoutTubeItemProperties = {
    maxResults: number;
    queryString: string;
    part: string;
}

export type YouTubeSearchResult = {
    etag: string;
    items: SearchItem[];
    kind: string;
    nextPageToke: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    regionCode: string;
}

export type SearchItem = {
    etag: string;
    id: {
        channelId: string;
        kind: string;
    };
    kind: string;
    snippet: ItemSnippet;
}

type ItemSnippet = {
    channelId: string;
    channelTitle: string;
    desciption: string;
    liveBrodcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: Thumbnails;
    title: string;
}

type Thumbnails = {
    [kind: string]: {
        url: string;
    }
}
