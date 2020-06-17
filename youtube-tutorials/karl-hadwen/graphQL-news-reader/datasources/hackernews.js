import { RESTDataSource } from "apollo-datasource-rest";

export class HackerNewsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://hacker-news.firebaseio.com/v0/";
    }

    articleFormator({ id, title, by, url, time } = {}) {
        return {
            id: `hn-${id}`,
            author: by,
            source: "HackerNews",
            title,
            url,
            time,
        }
    }

    async getAllArticleIds() {
        return await this.get("topstories.json");
    }

    async getArticle(articleId) {
        const result = await this.get(`item/${articleId}.json`);
        return this.articleFormator(result);
    }

    async getAllArticles() {
        let articleIds = await this.getAllArticleIds();
        articleIds = articleIds.slice(0, 50);
        return Promise.all(articleIds.map(articleId => this.getArticle(articleId)));
    }

    getArticleByIds(articleIds) {
        return Promise.all(articleIds.map(articleId => this.getArticle(articleId)));
    }
}
