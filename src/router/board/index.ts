"use strict";

import { Router } from "express";

const router = Router();

import { getBoards, getBoard } from "router/board/board.ctrl";

router.route("/").get(getBoards);

router.route("/:id").get(getBoard);

export default router;