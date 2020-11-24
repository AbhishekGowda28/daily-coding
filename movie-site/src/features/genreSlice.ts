import { createSlice } from "@reduxjs/toolkit";
import { MovieDBURL } from "../constants/urls";
import { ApiConfiguration } from "../interface/configuration";
import { genreType } from "../interface/movie";
import { getGenreList } from "../service/genre";
import store from "../store";

type Genre = {
    movies: genreType[],
    tv: genreType[],
};

type InitalState = {
    genres: Genre;
    configuration: ApiConfiguration;
};

export const genreSlice = createSlice({
    name: "movie",
    initialState: {
        genres: { movies: [], tv: [] },
        configuration: {
            change_keys: [],
            images: {
                backdrop_sizes: [],
                base_url: "",
                logo_sizes: [],
                poster_sizes: [],
                profile_sizes: [],
                secure_base_url: "",
                still_sizes: []
            }
        }
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

export const { updateGenerList, updateConfiguration } = genreSlice.actions;

export default genreSlice.reducer;

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
