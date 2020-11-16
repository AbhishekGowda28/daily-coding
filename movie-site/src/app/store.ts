import { configureStore } from "@reduxjs/toolkit";
import configurationReduce from "../features/configurationSlice";
import discoverReducer from "../features/discoverSlice";
import movieReducer from "../features/movieSlice";
export default configureStore({
    reducer: {
        movie: movieReducer,
        configuration: configurationReduce,
        discover: discoverReducer
    }
});
