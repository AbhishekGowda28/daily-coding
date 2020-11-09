import { createSlice } from "@reduxjs/toolkit";

type InitalState = {
    movieList: any[];
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: [],
    },
    reducers: {
        getMovieList: (state: InitalState) => {
            state.movieList.push();
        }
    }
});

export const { getMovieList } = movieSlice.actions;

export default movieSlice.reducer;
