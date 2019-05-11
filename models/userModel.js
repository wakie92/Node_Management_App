"use strict";

import bcrypt from "bcryptjs";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set: function(value) {
          const salt = bcrypt.genSaltSync(12);
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hash);
        }
      },
      user_type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "U"
      },
      address: {
        type: DataTypes.STRING
      },
      salary: {
        type: DataTypes.INTEGER
      },
      profile_image: {
        type: DataTypes.STRING
      },
      birth: {
        type: DataTypes.STRING
      },
      join_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      leave_date: {
        type: DataTypes.DATE
      },
      working_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      grade: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "사원"
      },
      half_vacation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      year_vacation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      total_year_vacation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 15
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
