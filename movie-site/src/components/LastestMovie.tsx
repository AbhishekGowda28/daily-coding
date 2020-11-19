import React from "react";
import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { updateMovieList } from "../features/discoverSlice";
import { MovieResult } from "../interface/movie";
import { getLatest } from "../service/discover";

interface LatestMovieProps {

};

const LastestMovie = (props: LatestMovieProps) => {
    const [movieList, setMovieList] = React.useState(store.getState().discover.movies);
    const [images, setImages] = React.useState(store.getState().movie.configuration.images);
    const [pageNumber, setPageNumber] = React.useState(1);
    React.useEffect(() => {
        getLatest({ url: MovieDBURL.discover.movie, pageNumber: pageNumber }).then(result => {
            console.log(result)
            store.dispatch(updateMovieList(result));
        });
    }, [pageNumber]);
    store.subscribe(() => {
        setMovieList(store.getState().discover.movies);
        setImages(store.getState().movie.configuration.images);
    });
    const getVoteRating = (vote: number) => {
        vote = Math.round(vote / 2);
        let ratings = "";
        for (let count = 0; count < vote; count++) {
            ratings += "⭐";
        }
        return ratings;
    }
    return (
        <div className="discover">
            Latest Movies- {pageNumber}
            <div>
                <button disabled={pageNumber <= 1 ? true : false} onClick={() => {
                    setPageNumber(pageNumber - 1);
                }}>Previous</button>
                <button onClick={() => {
                    setPageNumber(pageNumber + 1);
                }}>Next</button>
            </div>
            {movieList.results.map((movie: MovieResult) => {
                const imgSrc = `${images.secure_base_url}original${movie.poster_path}`
                return (
                    <div key={movie.id} className="latest-movie">
                        <div className="title">{movie.title} - {getVoteRating(movie.vote_average)}</div>
                        <div className="try-me">
                            <img src={imgSrc} alt={movie.title} width="120" height="180" />
                            {movie.overview}
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export { LastestMovie };

