import React from "react";
import store from "../app/store";
import { fetchGenre } from "../features/movieSlice";

export const Movie = () => {
    const [movieState, updateMovieState] = React.useState(store.getState().movie.genres);
    store.subscribe(() => { updateMovieState(store.getState().movie.genres); });
    return (
        <div>
            <div onClick={fetchGenre}>Moives Genre</div>
            {movieState.map((title) => <div key={title.id}>{title.name}</div>)}
        </div>
    );
}
