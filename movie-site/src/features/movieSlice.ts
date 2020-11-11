import { createSlice } from "@reduxjs/toolkit";

type InitalState = {
    movieList: number;
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: 0,
    },
    reducers: {
        getMovieList: (state: InitalState) => {
            state.movieList += 1;
        }
    }
});

export const { getMovieList } = movieSlice.actions;

export default movieSlice.reducer;
