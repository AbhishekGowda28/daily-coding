import React from "react";
import store from "../app/store";
import { fetchGenre } from "../features/movieSlice";

export const Movie = () => {
    const [movieState, updateMovieState] = React.useState(store.getState().movie.genres);
    React.useEffect(() => {
        fetchGenre();
    }, []);

    store.subscribe(() => { updateMovieState(store.getState().movie.genres); });
    return (
        <div style={{display: "flex"}}>
            <div>
                <div>Moives Genre</div>
                {movieState.movies.map((title) => <div key={title.id} onClick={() => { console.log(title) }}>{title.name}</div>)}
            </div>
            <div>
                <div>TV Genre</div>
                {movieState.tv.map((title) => <div key={title.id} onClick={() => { console.log(title) }}>{title.name}</div>)}
            </div>
        </div>
    );
}
