import React from "react";
import { MovieDBURL } from "../constants/urls";
import { updateMovieList } from "../features/discoverSlice";
import { MovieResult } from "../interface/movie";
import { get } from "../service/agent";
import { getLatest } from "../service/discover";
import store from "../store";
import { Input } from "./Input";
interface LatestMovieProps {

};

const LastestMovie = (props: LatestMovieProps) => {
    const [movieList, setMovieList] = React.useState(store.getState().discover.movies);
    const [images, setImages] = React.useState(store.getState().genre.configuration.images);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [text, setText] = React.useState("");
    React.useEffect(() => {
        getLatest({ url: MovieDBURL.discover.movie, pageNumber: pageNumber }).then(result => {
            console.log(result)
            store.dispatch(updateMovieList(result));
        });
    }, [pageNumber]);
    store.subscribe(() => {
        setMovieList(store.getState().discover.movies);
        setImages(store.getState().genre.configuration.images);
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
            <div>
                <Input
                    type="text"
                    onChange={(event) => {
                        setText(event.target.value);
                        // window.console.log(event.target.value);
                    }}
                />
                <button onClick={() => {
                    get(`https://api.themoviedb.org/3/search/movie?api_key=95bb88008f8df4bbc4f8a9220fc14508&language=en-US&query=${text}`).then((result) => {
                        window.console.log(result);
                    });
                }}>Search</button>
            </div>
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
                        <div className="description">
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
