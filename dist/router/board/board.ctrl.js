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
// 게시판 리스트
exports.getBoards = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.session.user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const boards = yield board_model_1.Board.findAll({});
    return res.status(200).send(boards);
});
// 게시판 작성
exports.createBoard = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { user } = req.session;
    if (!user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const { user_type } = user;
    if (user_type !== "M") {
        return res.sendStatus(403);
    }
    yield board_model_1.Board.create(req.body);
    return res.status(201).send({ message: "게시글 등록이 완료되었습니다." });
});
// 게시판 상세
exports.getBoard = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    if (!req.session.user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const board = yield board_model_1.Board.findOne({ where: { id } });
    if (!board) {
        return res.status(404).send({ message: "존재하지 않는 게시글입니다." });
    }
    yield board_model_1.Board.update({ view: board.view + 1 }, { where: { id } });
    return res.status(200).send(board);
});
// 게시판 수정
exports.updateBoard = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const { user } = req.session;
    if (!user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const { user_type } = user;
    if (user_type !== "M") {
        return res.sendStatus(403);
    }
    yield board_model_1.Board.update(req.body, { where: { id } });
    return res.sendStatus(204);
});
exports.destoryBoard = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const { user } = req.session;
    if (!user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const { user_type } = user;
    if (user_type !== "M") {
        return res.sendStatus(403);
    }
    yield board_model_1.Board.destroy({ where: { id } });
    return res.sendStatus(204);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuY3RybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvYm9hcmQvYm9hcmQuY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJYixvREFBMkM7QUFFM0MsVUFBVTtBQUNHLFFBQUEsU0FBUyxHQUFHLENBQ3hCLEdBQVksRUFDWixHQUFhLEVBQ08sRUFBRTtJQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQVEsQ0FBQyxJQUFJLEVBQUU7UUFDdkIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7S0FDNUQ7SUFFRCxNQUFNLE1BQU0sR0FBWSxNQUFNLG1CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUM7QUFFRixTQUFTO0FBQ0ksUUFBQSxXQUFXLEdBQUcsQ0FDMUIsR0FBWSxFQUNaLEdBQWEsRUFDTyxFQUFFO0lBQ3RCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBUSxDQUFDO0lBRTlCLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztLQUM1RDtJQUVELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFFM0IsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO1FBQ3RCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMzQjtJQUVELE1BQU0sbUJBQUss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