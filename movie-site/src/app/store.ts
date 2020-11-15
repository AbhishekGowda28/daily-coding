import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import configurationReduce from "../features/configurationSlice";

export default configureStore({
    reducer: {
        movie: movieReducer,
        configuration: configurationReduce
    }
});
