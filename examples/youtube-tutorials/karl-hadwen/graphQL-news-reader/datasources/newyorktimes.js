import { RESTDataSource } from "apollo-datasource-rest";

export class NewYorkNewsAPI extends RESTDataSource {
    articleFormator({ id, title, byline, url, published_date } = {}) {
        return {
            id: `ny-${id}`,
            author: byline,
            source: "New York Times",
            title: title,
            url: url,
            time: published_date
        }
    }

    async getAllArticles() {
        const API_KEY = "nXX2c5Lu1YyQQ6ztMOoiDBWMsbdTrNzG";
        const result = await this.get(
            `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
        );
        return result?.results.map(article => this.articleFormator(article));
    }

}