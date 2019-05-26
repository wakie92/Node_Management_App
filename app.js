const express = require("express");
const session = require("express-session");

// import { sequelize } from "./models";

// sequelize.sync().then(() => console.log("sequelize sync"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    key: "managing-app",
    secret: "managing-app-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 1000
    }
  })
);

app.use("/users", require("./router/user"));
app.use("/boards", require("./router/board"));

app.listen(3000, () => console.log("Server is running"));
