"use strict";

import {
  Table,
  Model,
  Column,
  DataType,
  Default,
  AllowNull,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";

import { User } from "./user.model";

@Table({
  tableName: "attendance",
  underscored: true,
  timestamps: true,
  charset: "utf8",
  collate: "utf8_general_ci"
})
export class Attendance extends Model<Attendance> {
  @Default(false)
  @Column({
    type: DataType.BOOLEAN
  })
  late!: boolean;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE
  })
  start_time!: Date;

  @AllowNull(true)
  @Column({
    type: DataType.DATE
  })
  finish_time!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
