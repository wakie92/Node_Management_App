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
const board_model_1 = require("models/board.model");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY3RybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvYm9hcmQvYm9hcmQuY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJYixvREFBMkM7QUFFOUIsUUFBQSxTQUFTLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPO0tBQ1I7SUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQVEsQ0FBQyxJQUFJLEVBQUU7UUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE9BQU87S0FDUjtJQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sbUJBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPO0tBQ1I7SUFFRCxNQUFNLG1CQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFaEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQyJ9