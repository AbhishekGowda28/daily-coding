import datasources from "../datasources";

export const resolvers = {
    Query: {
        articleBySource: (_, args, { dataSources }) => {
            const { id, source } = args;
            return dataSources[source].getArticle(id);
        },
        articlesBySource: (_, args, { dataSources }) => {
            const { ids, source } = args;
            return dataSources[source].getArticleByIds(ids);
        },
        getAllArticles: (_, args, { dataSources }) => {
            const { source } = args;
            return datasources[source].getAllArticles();
        }
    }
}