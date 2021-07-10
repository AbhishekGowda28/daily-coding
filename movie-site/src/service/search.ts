import { MovieProperties, MovieSearchResult } from "../interface/search";
import { get } from "../service/agent";
export function searchMovies(movieProperties: MovieProperties): Promise<MovieSearchResult> {
    return get(movieProperties.url).then((result: MovieSearchResult) => {
        return result;
    })
}