import { createSlice } from "@reduxjs/toolkit";
import store from "../app/store";
import { genreType } from "../interface/movie";
import { getGenreList } from "../service/genre";

type InitalState = {
    movieList: number;
    genres: genreType[];
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: 0,
        genres: []
    } as InitalState,
    reducers: {
        updateGenerList: (state, action) => {
            Object.assign(state.genres, action.payload.genres);
        }
    },
});

export const { updateGenerList } = movieSlice.actions;

export default movieSlice.reducer;
export async function fetchGenre() {
    // const URL = "https://api.themoviedb.org/3/genre/tv/list?api_key=95bb88008f8df4bbc4f8a9220fc14508&language=en-US";
    // fetch(URL).then(response => {
    //     console.log(`${new Date()} -> {response ${response}}`);
    //     return response.json();
    // }).then((result: genreType) => {
    //     console.log(`${new Date()} -> {Result -> ${JSON.stringify(result)}}`);
    //     store.dispatch(updateGenerList(result));
    //     return result;
    // }).catch(error => {
    //     console.trace(error);
    //     console.log(`${new Date()} -> {Error fetching Data}, ${error}`);
    // });
    getGenreList().then((result) => {
        store.dispatch(updateGenerList(result));
    });
}

