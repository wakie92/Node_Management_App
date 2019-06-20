"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const board_ctrl_1 = require("./board.ctrl");
router.route("/").get(board_ctrl_1.getBoards);
router.route("/:id").get(board_ctrl_1.getBoard);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL2JvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixxQ0FBaUM7QUFFakMsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLDZDQUFtRDtBQUVuRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxzQkFBUyxDQUFDLENBQUM7QUFFakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMscUJBQVEsQ0FBQyxDQUFDO0FBRW5DLGtCQUFlLE1BQU0sQ0FBQyJ9