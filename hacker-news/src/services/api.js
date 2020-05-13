import { get } from "./agent";
import { HackerNewsURL } from "../constants/constants";

function getNewStorieIds() {
    return get(HackerNewsURL.NEW_STORIES).then((new_stories_list) => {
        return new_stories_list;
    });
}

function getItem(itemId) {
    const url = `${HackerNewsURL.ITEM}${itemId}.json`;
    return get(url).then((item) => {
        return { title: item.title, url: item.url };
    });
}

export {
    getNewStorieIds,
    getItem
};
