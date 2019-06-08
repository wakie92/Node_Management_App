"use strict";

import { Sequelize } from "sequelize-typescript";

require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } = process.env;

export const sequelize = new Sequelize(
  String(DB_NAME),
  String(DB_USER),
  DB_PWD,
  {
    modelPaths: [__dirname + "/*.model.ts"],
    modelMatch: (filename, member) => {
      return (
        filename.substring(0, filename.indexOf(".model")) ===
        member.toLowerCase()
      );
    },
    host: String(DB_HOST),
    port: Number(DB_PORT),
    dialect: "mysql",
    logging: true,
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true
    }
  }
);
