import express from "express";
import graphqlHttp from "express-graphql";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from "graphql";

import { sequelize } from "./models";

sequelize.sync().then(() => console.log("sequelize sync"));

// const schema = buildSchema(`
//   type Query {
//     hello: String
//     person: [Person]
//   }

//   type Person {
//     name: String
//     age: Int
//   }
// `);

// const root = {
//   hello: () => "hello",
//   person: () => {
//     return [
//       { name: "seo", age: 27 },
//       { name: "eun", age: 25 },
//       { name: "song", age: 17 }
//     ];
//   }
// };

const personType = new GraphQLObjectType({
  name: "Person",
  fields: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "hello"
    },
    persons: {
      type: new GraphQLList(personType),
      resolve: () => {
        return [
          { name: "seo", age: 27 },
          { name: "eun", age: 25 },
          { name: "song", age: 17 }
        ];
      }
    }
  }
});

const schema = new GraphQLSchema({ query: queryType });

const app = express();

app.use(
  "/",
  graphqlHttp({
    schema,
    // rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => console.log("Server is running"));
