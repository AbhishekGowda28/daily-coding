import { createSlice } from "@reduxjs/toolkit";

type InitalSearchState = {
    movies: [];
    tv: [];
};

export const SearchSlice = createSlice({
    initialState: {
        movies: [],
        tv: []
    } as InitalSearchState,
    name: "search",
    reducers: {
        getMovies: (state, action) => {

        },
        getTVShows: (state, action) => {

        }
    },
});

export const { getMovies, getTVShows } = SearchSlice.actions;