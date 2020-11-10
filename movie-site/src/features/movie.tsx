import React from "react";
import store from "../app/store";
import { getMovieList } from "./movieSlice";
export const Movie = () => {
    return (
        <div onClick={store.dispatch(getMovieList)}>Moives</div>
    );
}