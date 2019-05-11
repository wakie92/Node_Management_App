import { GraphQLObjectType } from "graphql";
import userQueryFields from "../queryFields/user";
import userMutationFields from "../mutationFields/user";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userQueryFields
  }
});

export const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...userMutationFields
  }
});
