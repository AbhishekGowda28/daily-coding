const BaseURL = "https://api.themoviedb.org/3";
const APIKEY = "95bb88008f8df4bbc4f8a9220fc14508&language=en-US";

const MovieDBURL = {
    genreList: `${BaseURL}/genre/tv/list?api_key=${APIKEY}`,
};

export { MovieDBURL };
