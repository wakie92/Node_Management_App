const express = require("express");
const router = express.Router();

const { getBoards, getBoard } = require("./board.ctrl");

router.route("/").get(getBoards);

router.route("/:id").get(getBoard);

module.exports = router;
