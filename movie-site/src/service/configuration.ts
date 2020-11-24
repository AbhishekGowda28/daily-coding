import store from "../store";
import { MovieDBURL } from "../constants/urls";
import { updateConfiguration } from "../features/genreSlice";
import { get } from "./agent";

export async function apiConfiguration() {
    return await get(MovieDBURL.configuration.api).then((result) => {
        store.dispatch(updateConfiguration(result));
    }).catch((error) => {
        console.error("Error", error);
    });
}