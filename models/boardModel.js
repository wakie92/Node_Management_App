"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "board",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false
      },
      view: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      timestamps: true,
      underscored: true,
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
};
