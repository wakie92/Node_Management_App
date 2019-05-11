import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const userType = new GraphQLObjectType({
  name: "User",
  fields: {
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
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});

export default userType;
