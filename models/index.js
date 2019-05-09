"use strict";

require("dotenv").config();
const Sequelize = require("sequelize");

const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } = process.env;

const db = {};

console.log(DB_NAME);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: true,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true
  }
});

db.User = require("./userModel")(sequelize, Sequelize);
db.Attendance = require("./attendanceModel")(sequelize, Sequelize);
db.Board = require("./boardModel")(sequelize, Sequelize);

db.User.hasMany(db.Attendance, { foreignKey: "userId", sourceKey: "id" });
db.Attendance.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });

db.User.hasMany(db.Board, { foreignKey: "userId", sourceKey: "id" });
db.Board.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
