"use strict";

import {
  Column,
  Model,
  Table,
  DataType,
  Unique,
  Default,
  AllowNull,
  HasMany
} from "sequelize-typescript";
import bcrypt from "bcryptjs";

import { Board } from "models/board.model";
import { Attendance } from "models/attendance.model";

@Table({
  tableName: "user",
  underscored: true,
  timestamps: true,
  charset: "utf8",
  collate: "utf8_general_ci"
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING
  })
  name!: string;

  @Unique
  @Column({
    type: DataType.STRING
  })
  email!: string;

  @Column({
    type: DataType.STRING
  })
  set password(value: string) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(value, salt);
    this.setDataValue("password", hash);
  }

  @Default("U")
  @Column({
    type: DataType.STRING
  })
  user_type!: string;

  @Column({
    type: DataType.STRING
  })
  address!: string;

  @Column({
    type: DataType.INTEGER
  })
  salary!: number;

  @Column({
    type: DataType.STRING
  })
  profile_image!: string;

  @Column({
    type: DataType.STRING
  })
  birth!: string;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE
  })
  join_date!: Date;

  @AllowNull(true)
  @Column({
    type: DataType.DATE
  })
  leave_date!: Date;

  @Default(0)
  @Column({
    type: DataType.INTEGER
  })
  working_year!: number;

  @Default("사원")
  @Column({
    type: DataType.STRING
  })
  grade!: string;

  @Default(0)
  @Column({
    type: DataType.INTEGER
  })
  half_vacation!: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER
  })
  year_vacation!: number;

  @Default(15)
  @Column({
    type: DataType.INTEGER
  })
  total_year_vacation!: number;

  @HasMany(() => Board)
  boards!: Board[];

  @HasMany(() => Attendance)
  attendances!: Attendance[];
}
