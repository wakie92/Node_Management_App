"use strict";

import {
  Column,
  Model,
  Table,
  DataType,
  Default,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";

import { User } from "./user.model";

@Table({
  tableName: "board",
  underscored: true,
  timestamps: true,
  charset: "utf8",
  collate: "utf8_general_ci"
})
export class Board extends Model<Board> {
  @Column({
    type: DataType.STRING
  })
  title!: string;

  @Column({
    type: DataType.STRING
  })
  contents!: string;

  @Default(0)
  @Column({
    type: DataType.INTEGER
  })
  view!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
