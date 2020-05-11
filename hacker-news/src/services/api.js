import { get } from "./agent";
import { BASE_URL, OPTIONS } from "../constants/constants";

function getNewStorieIds() {
    const url = `${BASE_URL}/${OPTIONS.NEW_STORIES}.json`;
    return get(url).then((new_stories_list) => {
        console.log(new_stories_list);
        return new_stories_list;
    });
}

function getItem(itemId) {
    const url = `${BASE_URL}/${OPTIONS.ITEM}/${itemId}.json`;
    return get(url).then((item) => {
        console.log({ item });
        return { title: item.title, url: item.url };
    });
}

export {
    getNewStorieIds,
    getItem
};
