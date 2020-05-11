import { get } from "./agent";
import { BASE_URL, OPTIONS } from "../constants/constants";

function getNewStorieIds() {
    const url = `${BASE_URL}/${OPTIONS.NEW_STORIES}.json`;
    return get(url).then((new_stories_list) => {
        return new_stories_list;
    });
}

function getItem(itemId) {
    const url = `${BASE_URL}/${OPTIONS.ITEM}/${itemId}.json`;
    get(url).then((item) => {
        console.log({ item });
    });
}

export {
    getNewStorieIds,
    getItem
};
