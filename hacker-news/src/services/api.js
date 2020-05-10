import { get } from "./agent";
import { BASE_URL, OPTIONS } from "../constants/constants";

function getNewStories() {
    const url = `${BASE_URL}/${OPTIONS.NEW_STORIES}.json`;
    get(url).then((new_stories_list) => {
        getItem(new_stories_list[0]);
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
    getNewStories,
    getItem
};
