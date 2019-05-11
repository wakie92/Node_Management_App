import { GraphQLString, GraphQLInt } from "graphql";

import userType from "../../types/user";

import { createUser, loginUser } from "../../resolvers/user";

const mutationUserFields = {
  createUser: {
    type: userType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      user_type: { type: GraphQLString },
      address: { type: GraphQLString },
      salay: { type: GraphQLInt },
      profile_image: { type: GraphQLString },
      birth: { type: GraphQLString },
      join_date: { type: GraphQLString },
      leave_date: { type: GraphQLString },
      working_year: { type: GraphQLInt },
      grade: { type: GraphQLString },
      half_vacation: { type: GraphQLInt },
      year_vacation: { type: GraphQLInt },
      total_year_vacation: { type: GraphQLInt },
      created_at: { type: GraphQLString },
      updated_at: { type: GraphQLString }
    },
    resolve: async (_, user) => await createUser(user)
  },
  loginUser: {
    type: userType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (_, { email, password }) => await loginUser(email, password)
  }
};

export default mutationUserFields;
