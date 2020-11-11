import React from "react";
import store from "../app/store";
import { getMovieList } from "./movieSlice";

export const Movie = () => {
    const [movieState, updateMovieState] = React.useState(store.getState().movie);
    const dispatching = () => { store.dispatch(getMovieList()); }
    store.subscribe(() => { updateMovieState(store.getState().movie); });
    return (
        <div>
            <div onClick={dispatching}>Moives</div>
            <div>{JSON.stringify(movieState)}</div>
        </div>
    );
}
