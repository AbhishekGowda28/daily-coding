import React from "react";
import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { fetchGenre } from "../features/genreSlice";
import { apiConfiguration } from "../service/configuration";
import { getLatest } from "../service/discover";

export const Movie = () => {
    const [movieState, updateMovieState] = React.useState(store.getState().genre.genres);
    React.useEffect(() => {
        apiConfiguration();
        fetchGenre();
        getLatest({ url: MovieDBURL.discover.movie });
        getLatest({ url: MovieDBURL.discover.tv });
    }, []);

    store.subscribe(() => { updateMovieState(store.getState().genre.genres); });
    return (
        <div style={{ display: "flex" }}>
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
