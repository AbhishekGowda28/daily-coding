import { genreType } from "../interface/movie";

async function getGenreList(url: string): Promise<genreType[]> {
    return await fetch(url).then(response => {
        return response.json();
    }).then((result: { genres: genreType[] }) => {
        return result.genres;
    }).catch(error => {
        console.trace(error);
        console.log(`${new Date()} -> {Error fetching Data}, ${error}`);
        return [{ id: -99, name: "Error" }];
    });
}

export { getGenreList };

