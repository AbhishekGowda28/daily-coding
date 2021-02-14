import { API_KEY } from "../../constants/secrets";
import { get } from "../../services/agent";

type YoutTubeItemProperties = {
    maxResults: number;
    queryString: string;
    part: string;
}

export class YouTubeClass {
    private YTURL = {
        search: "https://www.googleapis.com/youtube/v3/search"
    };
    private key = API_KEY.substr(3, 39);

    async getSearchResult(searchItemProperties: YoutTubeItemProperties) {
        return await get(`${this.YTURL.search}?maxResults=${searchItemProperties.maxResults}&part=${searchItemProperties.part}&q=${searchItemProperties.queryString}&key=${this.key}`).then(response => {
            return response;
        });
    }

}
