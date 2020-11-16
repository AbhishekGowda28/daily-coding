import store from "../app/store";
import { MovieDBURL } from "../constants/urls";
import { updateConfiguration } from "../features/movieSlice";
import { get } from "./agent";

export function apiConfiguration() {
    get(MovieDBURL.configuration.api).then((result) => {
        console.log(result);
        store.dispatch(updateConfiguration(result));
    }).catch((error) => {
        console.error("Error", error);
    });
}