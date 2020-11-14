import { genreType } from "../interface/movie";

async function getGenreList() {
    const URL = "https://api.themoviedb.org/3/genre/tv/list?api_key=95bb88008f8df4bbc4f8a9220fc14508&language=en-US";
    return await fetch(URL).then(response => {
        console.log(`${new Date()} -> {response ${response}}`);
        return response.json();
    }).then((result: genreType) => {
        console.log(`${new Date()} -> {Result -> ${JSON.stringify(result)}}`);
        return result;
    }).catch(error => {
        console.trace(error);
        console.log(`${new Date()} -> {Error fetching Data}, ${error}`);
    });
}

export { getGenreList };