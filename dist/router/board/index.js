"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const board_ctrl_1 = require("./board.ctrl");
router
    .route("/")
    .get(board_ctrl_1.getBoards)
    .post(board_ctrl_1.createBoard);
router
    .route("/:id")
    .get(board_ctrl_1.getBoard)
    .put(board_ctrl_1.updateBoard)
    .delete(board_ctrl_1.destoryBoard);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL2JvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixxQ0FBaUM7QUFFakMsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLDZDQU1zQjtBQUV0QixNQUFNO0tBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUNWLEdBQUcsQ0FBQyxzQkFBUyxDQUFDO0tBQ2QsSUFBSSxDQUFDLHdCQUFXLENBQUMsQ0FBQztBQUVwQixNQUFNO0tBQ0osS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUNiLEdBQUcsQ0FBQyxxQkFBUSxDQUFDO0tBQ2IsR0FBRyxDQUFDLHdCQUFXLENBQUM7S0FDaEIsTUFBTSxDQUFDLHlCQUFZLENBQUMsQ0FBQztBQUV2QixrQkFBZSxNQUFNLENBQUMifQ==