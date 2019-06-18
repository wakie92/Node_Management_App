"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import { User } from "models/user.model";
const user_model_1 = require("../../models/user.model");
exports.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const users = yield user_model_1.User.findAll({});
    return res.status(200).send(users);
});
exports.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.User.findOne({ where: { id } });
    if (!user) {
        return res.status(404).send({ message: "존재하지 않는 사용자입니다." });
    }
    return res.status(200).send(user);
});
exports.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.session.user) {
        return res.status(403).send({ message: "이미 로그인 되었습니다." });
    }
    const { email, password } = req.body;
    if (!email || !password) {
        return res.sendStatus(400);
    }
    const isExist = yield user_model_1.User.findOne({
        where: { email }
    });
    if (!isExist) {
        return res.status(401).send({ message: "존재하지 않는 사용자입니다." });
    }
    const isCorrectPassword = bcryptjs_1.default.compareSync(password, isExist.password);
    if (!isCorrectPassword) {
        return res.status(401).send({ message: "비밀번호가 일치하지 않습니다." });
    }
    req.session.user = isExist;
    req.session.save(err => {
        if (err) {
            console.error(err);
            return res.status(500).send({ message: "Internal Server Error!" });
        }
        return res.status(200).send({ message: "로그인 되었습니다." });
    });
});
exports.signUp = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send({ message: "필수값을 입력해주세요." });
    }
    const isExistAccount = yield user_model_1.User.findOne({ where: { email } });
    if (isExistAccount) {
        return res.status(409).send({ message: "이미 존재하는 이메일입니다." });
    }
    yield user_model_1.User.create({ name, email, password });
    return res.status(200).send({ message: "회원 등록이 완료 되었습니다." });
});
exports.logout = (req, res) => __awaiter(this, void 0, void 0, function* () {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).send({ message: "Internal Server Error!" });
        }
        return res.sendStatus(204);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jdHJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlci91c2VyL3VzZXIuY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFHYix3REFBOEI7QUFFOUIsNENBQTRDO0FBQzVDLHdEQUErQztBQUVsQyxRQUFBLFFBQVEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLEtBQUssR0FBRyxNQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRW5ELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztLQUM3RDtJQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN6RCxJQUFJLEdBQUcsQ0FBQyxPQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3JC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