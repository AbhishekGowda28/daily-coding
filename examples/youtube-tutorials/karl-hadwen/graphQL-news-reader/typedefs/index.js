import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        articleBySource(id: ID!, source: String!): Article,
        articlesBySource(ids: [Int!]!, source: String): [Article],
        getAllArticles(source: String): [Article!]!,
        getArticles:[Article!]!
    }

    type Article {
        id: ID!
        title: String
        author: String
        url: String
        time: String
        source: String
    }
`;