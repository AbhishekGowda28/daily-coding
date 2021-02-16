export type YoutTubeItemProperties = {
    part: string;
    queryString: string;
    nextPageToken?: string;
}

export type YouTubeSearchResult = {
    etag: string;
    items: SearchItem[];
    kind: string;
    nextPageToken: string;
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
