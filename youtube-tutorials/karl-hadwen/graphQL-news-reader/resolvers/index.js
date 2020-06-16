export const resolvers = {
    Query: {
        articleBySource: (_, args, { dataSources }) => {
            const { id, source } = args;
            return dataSources[source].getArticle(id);
        }
    }
}