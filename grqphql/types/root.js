import { GraphQLObjectType } from "graphql";
import userFields from "../fields/user/user";

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userFields
  }
});

export default queryType;
