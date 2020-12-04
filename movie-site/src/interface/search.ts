export type MovieProperties = {
    url: string;
    query: string;
    language?: string;
    page?: number;
    include_adult?: boolean;
    year?: number;
    primary_release_year?: number;
};

export type MovieSearchResult = {
    page: number;
    total_pages: number;
    total_results: number;
    results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: false;
        vote_average: number;
        vote_count: number;
    }[];
}