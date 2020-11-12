import { createSlice } from "@reduxjs/toolkit";

type InitalState = {
    movieList: number;
    genre: any;
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: 0,
        genre: {}
    },
    reducers: {
        getMovieList: (state: InitalState) => {
            let response = {};
            fetchGenre().then(genre => {
                response = genre;
                state.genre = { a: response };
            });
            Object.assign(state.genre, { a: "there was no updation" });
        }
    }
});

export const { getMovieList } = movieSlice.actions;

export default movieSlice.reducer;
async function fetchGenre() {
    const URL = "https://api.themoviedb.org/3/genre/tv/list?api_key=95bb88008f8df4bbc4f8a9220fc14508&language=en-US";
    // let finalResult = {};
    let finalResult = await fetch(URL).then(response => {
        console.log(`${new Date()} -> {response ${response}}`);
        return response.json();
    }).then(result => {
        console.log(`${new Date()} -> {Result -> ${JSON.stringify(result)}}`);
        return result;
    }).catch(error => {
        console.trace(error);
        console.log(`${new Date()} -> {Error fetching Data}, ${error}`);
    });
    return finalResult
}

