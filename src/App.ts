"use strict";

import express, { Application, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import session from "express-session";
import cors from "cors";

import Server from "Server";
import { sequelize } from "models";

import userRouter from "router/user";
import boardRouter from "router/board";
import attendanceRouter from "router/attendance";

const app: Application = new Server().app;

sequelize.sync().then(() => console.log("connected database!"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
	session({
		secret: "managing-app-secret",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 60 * 60 * 1000,
		},
	}),
);

app.use("/users", userRouter);
app.use("/boards", boardRouter);
app.use("/attendances", attendanceRouter);

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

app.listen(4000, () => console.log("Server is running ~ "));
