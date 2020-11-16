const BaseURL = "https://api.themoviedb.org/3";
const APIKEY = "95bb88008f8df4bbc4f8a9220fc14508";
// const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWJiODgwMDhmOGRmNGJiYzRmOGE5MjIwZmMxNDUwOCIsInN1YiI6IjVmYThlNGUyOTRkOGE4MDAzZmUwZTJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_wKWff7S0nWRdPD2DNL2OMLC6jcuH86Cxt64_FWUNM";

const MovieDBURL = {
    genre: {
        tv: `${BaseURL}/genre/tv/list?api_key=${APIKEY}&language=en-US`,
        movie: `${BaseURL}/genre/movie/list?api_key=${APIKEY}&language=en-US`
    },
    discover: {
        tv: `${BaseURL}/discover/tv?api_key=${APIKEY}&language=en-US`,
        movie: `${BaseURL}/discover/movie?api_key=${APIKEY}&language=en-US`
    },
    configuration:{
        api: `${BaseURL}/configuration?api_key=${APIKEY}&language=en-US`
    },
};

export { MovieDBURL };

