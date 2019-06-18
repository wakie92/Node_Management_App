"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Board } from "models/board.model";
const board_model_1 = require("../../models/board.model");
exports.getBoards = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.session.user) {
        res.status(401).send({ message: "로그인 이후에 이용해주세요." });
        return;
    }
    const boards = yield board_model_1.Board.findAll({});
    return res.status(200).send(boards);
});
exports.getBoard = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    if (!req.session.user) {
        res.status(401).send({ message: "로그인 이후에 이용해주세요." });
        return;
    }
    const board = yield board_model_1.Board.findOne({ where: { id } });
    if (!board) {
        res.status(404).send({ message: "존재하지 않는 게시글입니다." });
        return;
    }
    yield board_model_1.Board.update({ view: board.view + 1 }, { where: { id } });
    return res.status(200).send(board);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY3RybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvYm9hcmQvYm9hcmQuY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJYiw4Q0FBOEM7QUFDOUMsMERBQWlEO0FBRXBDLFFBQUEsU0FBUyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBUSxDQUFDLElBQUksRUFBRTtRQUN0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTztLQUNSO0lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUQsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPO0tBQ1I7SUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLG1CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXJELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTztLQUNSO0lBRUQsTUFBTSxtQkFBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWhFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMifQ==