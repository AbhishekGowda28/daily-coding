import { configureStore } from "@reduxjs/toolkit";
import configurationReduce from "../features/configurationSlice";
import discoverReducer from "../features/discoverSlice";
import genreReducer from "../features/genreSlice";
export default configureStore({
    reducer: {
        genre: genreReducer,
        configuration: configurationReduce,
        discover: discoverReducer
    }
});
