import { genreType } from "../interface/movie";
import { get } from "./agent";

async function getGenreList(url: string): Promise<genreType[]> {
    return await get(url).then((result: { genres: genreType[] }) => {
        return result.genres;
    }).catch(error => {
        console.error("Error", error);
        return [{ id: -99, name: "Error" }];
    });
}

export { getGenreList };

