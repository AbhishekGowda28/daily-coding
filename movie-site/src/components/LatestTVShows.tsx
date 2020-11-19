import React from "react";
import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { updateTVList } from "../features/discoverSlice";
import { TVResult } from "../interface/movie";
import { getLatest } from "../service/discover";

interface LatestTVShowsProps {

}

const LatestTVShows = (props: LatestTVShowsProps) => {
    const [showList, setShowList] = React.useState(store.getState().discover.tvShows);
    const [images, setImages] = React.useState(store.getState().movie.configuration.images);
    const [pageNumber, setPageNumber] = React.useState(1);
    React.useEffect(() => {
        getLatest({ url: MovieDBURL.discover.tv, pageNumber: pageNumber }).then(result => {
            store.dispatch(updateTVList(result));
        });
    }, [pageNumber]);
    store.subscribe(() => {
        setShowList(store.getState().discover.tvShows);
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
            Latest Shows - {pageNumber}
            <div>
                <button disabled={pageNumber <= 1 ? true : false} onClick={() => {
                    setPageNumber(pageNumber - 1);
                }}>Previous</button>
                <button onClick={() => {
                    setPageNumber(pageNumber + 1);
                }}>Next</button>
            </div>
            {showList.results.map((show: TVResult) => {
                const imgSrc = `${images.secure_base_url}original${show.poster_path}`
                return (
                    <div key={show.id} className="latest-movie">
                        <div className="title">{show.name} - {getVoteRating(show.vote_average)}</div>
                        <div className="try-me">
                            <img src={imgSrc} alt={show.original_name} width="120" height="180" />
                            {show.overview}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export { LatestTVShows };

