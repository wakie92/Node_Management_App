"use strict";

import { Router } from "express";

const router = Router();

import {
	getBoards,
	createBoard,
	getBoard,
	updateBoard,
	destoryBoard,
} from "./board.ctrl";

router
	.route("/")
	.get(getBoards)
	.post(createBoard);

router
	.route("/:id")
	.get(getBoard)
	.put(updateBoard)
	.delete(destoryBoard);

export default router;
