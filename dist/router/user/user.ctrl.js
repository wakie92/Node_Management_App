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
const user_model_1 = require("models/user.model");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jdHJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlci91c2VyL3VzZXIuY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFHYix3REFBOEI7QUFFOUIsa0RBQXlDO0FBRTVCLFFBQUEsUUFBUSxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVELE1BQU0sS0FBSyxHQUFHLE1BQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzNELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0tBQzdEO0lBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3pELElBQUksR0FBRyxDQUFDLE9BQVEsQ0FBQyxJQUFJLEVBQUU7UUFDckIsT0FBTyxHQUFHLENB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