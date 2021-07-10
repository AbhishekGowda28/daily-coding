import {get } from "./agent";
import { HackerNewsURL } from "../constants/url";

function getNewStorieIds() {
    return get(HackerNewsURL.NEW_STORIES).then((new_stories_list) => {
        return new_stories_list;
    });
}

function getItem(itemId) {
    const url = `${HackerNewsURL.ITEM}${itemId}.json`;
    return get(url).then((item) => {
        if (item !== null) {
            return { id: item.id, title: item.title, url: item.url, by: item.by, time: item.time };
        }
    });
}

export {
    getNewStorieIds,
    getItem
};