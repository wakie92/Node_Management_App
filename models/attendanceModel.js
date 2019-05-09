"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "attendance",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      late: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValues: false
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValues: DataTypes.NOW
      },
      finish_time: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: true,
      underscored: true
      // charset: "utf8",
      // collate: "utf8_general_ci"
    }
  );
};
