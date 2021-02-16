import { API_KEY } from "../../constants/secrets";
import { YoutTubeItemProperties, YouTubeSearchResult } from "../../interface/youTube/search";
import { get } from "../../services/agent";

export class YouTubeClass {
    private YTURL = {
        search: "https://www.googleapis.com/youtube/v3/search"
    };
    private key = API_KEY.substr(3, 39);
    private MAX_RESULT = 25;

    async getSearchResult(searchItemProperties: YoutTubeItemProperties): Promise<YouTubeSearchResult> {
        return await get(`${this.YTURL.search}?maxResults=${this.MAX_RESULT}&part=${searchItemProperties.part}&q=${searchItemProperties.queryString}&pageToken=${searchItemProperties.nextPageToken}&key=${this.key}`).then(response => {
            return response;
        }).catch(e => { return [] });
    }

    async getNextPageResult(searchItemProperties: YoutTubeItemProperties): Promise<YouTubeSearchResult> {
        return await get(`${this.YTURL.search}?part=${searchItemProperties.part}&maxResults=${this.MAX_RESULT}&q=${searchItemProperties.queryString}&pageToken=${searchItemProperties.nextPageToken}&key=${this.key}`).then(response => response);
    }

}
