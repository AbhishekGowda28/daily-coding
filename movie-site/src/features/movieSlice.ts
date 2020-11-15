import { createSlice } from "@reduxjs/toolkit";
import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { genreType } from "../interface/movie";
import { getGenreList } from "../service/genre";

type Genre = {
    movies: genreType[],
    tv: genreType[],
};

type InitalState = {
    movieList: number;
    genres: Genre;
    configuration: {
        change_keys: string[],
        images: any;
    };
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: 0,
        genres: { movies: [], tv: [] },
        configuration: { change_keys: [], images: {} }
    } as InitalState,
    reducers: {
        updateGenerList: (state, action) => {
            Object.assign(state.genres, action.payload);
        },
        updateConfiguration: (state, action) => {
            Object.assign(state.configuration, action.payload);
        }
    },
});

export const { updateGenerList, updateConfiguration } = movieSlice.actions;

export default movieSlice.reducer;

export async function fetchGenre() {
    let genreList: Genre = { tv: [], movies: [] };
    await getGenreList(MovieDBURL.genre.tv).then((result) => {
        genreList.tv = result;
    });
    await getGenreList(MovieDBURL.genre.movie).then((result) => {
        genreList.movies = result;
    });

    store.dispatch(updateGenerList(genreList));
}
