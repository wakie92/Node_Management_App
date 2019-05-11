import { GraphQLList, GraphQLString, GraphQLInt } from "graphql";

import userType from "../../types/user";

import { getUserList, getUser } from "../../resolvers/user";

const userQueryFields = {
  users: {
    type: new GraphQLList(userType),
    resolve: async () => await getUserList()
  },
  user: {
    type: userType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString }
    },
    resolve: async (_, { id }) => await getUser(id)
  }
};

export default userQueryFields;
