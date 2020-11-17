import React from "react";
import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { updateMovieList, updateTVList } from "../features/discoverSlice";
import { MovieResult } from "../interface/movie";
import { getLatest } from "../service/discover";

interface DiscoverProps {

};

const Discover = (props: DiscoverProps) => {
    const [movieList, setMovieList] = React.useState(store.getState().discover.movies);
    const [images, setImages] = React.useState(store.getState().movie.configuration.images);
    const [pageSize, setPageSize] = React.useState(1);
    React.useEffect(() => {
        getLatest({ url: MovieDBURL.discover.movie, pageNumber: pageSize }).then(result => {
            console.log(result)
            store.dispatch(updateMovieList(result));
        });
        getLatest({ url: MovieDBURL.discover.tv }).then(result => {
            store.dispatch(updateTVList(result));
        });
    }, [pageSize]);
    store.subscribe(() => {
        setMovieList(store.getState().discover.movies);
        setImages(store.getState().movie.configuration.images);
    });
    return (
        <div className="discover">
            Latest Movies
            {movieList.results.map((movie: MovieResult) => {
                const imgSrc = `${images.secure_base_url}original${movie.poster_path}`
                return (<div key={movie.id} className="latest-movie">
                    <div className="title">{movie.title}</div>
                    <div className="try-me">
                        <img src={imgSrc} alt={movie.title} width="300" />
                        {movie.overview}
                    </div>
                </div>)
            })}
            <button onClick={() => {
                setPageSize(pageSize + 1);
            }}>Next</button>
        </div>
    )
};

export { Discover };

