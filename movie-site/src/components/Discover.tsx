import React from "react";
import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { updateMovieList } from "../features/discoverSlice";
import { MovieResult } from "../interface/movie";
import { getLatest } from "../service/discover";

interface DiscoverProps {

};

const Discover = (props: DiscoverProps) => {
    const [movieList, setMovieList] = React.useState(store.getState().discover.movies);
    React.useEffect(() => {
        getLatest({ url: MovieDBURL.discover.movie, pageNumber: 100 }).then(result => {
            console.log(result)
            store.dispatch(updateMovieList(result));
        });
        // discover(MovieDBURL.discover.tv).then(result => {
        //     store.dispatch(updateTVList(result.results));
        // });
    }, []);
    store.subscribe(() => { setMovieList(store.getState().discover.movies) })
    return (
        <div className="discover">
            Latest Movies
            {movieList.results.map((movie: MovieResult) => {
                return (<div key={movie.id} className="latest-movie">
                    <div className="title">{movie.title}</div>
                    {movie.overview}
                </div>)
            })}
        </div>
    )
};

export { Discover };

