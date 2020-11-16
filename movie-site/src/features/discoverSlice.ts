import { createSlice } from "@reduxjs/toolkit";
import { MovieResult, TVResult } from "../interface/movie";

type DiscoverState = {
    movies: {
        page: number;
        results: MovieResult[];
        total_pages: number;
        total_results: number;
    };
    tvShows: {
        page: number;
        results: TVResult[];
        total_pages: number;
        total_results: number;
    }
};

export const DiscoverSlice = createSlice({
    name: "discover",
    initialState: {
        movies: {
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0
        },
        tvShows: {
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0
        }
    } as DiscoverState,
    reducers: {
        updateMovieList: (state, action) => {
            Object.assign(state.movies, action.payload);
        },
        updateTVList: (state, action) => {
            Object.assign(state.tvShows, action.payload);
        }
    }
});

export const { updateMovieList, updateTVList } = DiscoverSlice.actions;

export default DiscoverSlice.reducer;