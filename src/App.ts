"use strict";

import express, { Application, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import session from "express-session";

import Server from "Server";
import { sequelize } from "models";

import userRouter from "router/user";
import boardRouter from "router/board";

const app: Application = new Server().app;

sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "managing-app-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000
    }
  })
);

app.use("/users", userRouter);
app.use("/boards", boardRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
  return;
});

interface Err extends Error {
  status: number;
}

app.use((err: Err, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send(err.message);
  return;
});

app.listen(3000, () => console.log("Server is running ~ "));