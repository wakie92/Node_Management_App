import express from "express";
import graphqlHttp from "express-graphql";
import { GraphQLSchema } from "graphql";

import queryType from "./grqphql/types";

// sequelize.sync().then(() => console.log("sequelize sync"));

const schema = new GraphQLSchema({ query: queryType });

const app = express();

app.use(
  "/",
  graphqlHttp({
    schema,
    graphiql: true
  })
);

app.listen(3000, () => console.log("Server is running"));
