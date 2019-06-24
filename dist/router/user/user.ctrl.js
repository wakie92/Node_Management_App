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
// TODO:  회원정보 수정 ( 관리자 / 본인 - 패스워드만 가능 )
// TODO: 회원등록 최초, 패스워드 기본 값 ( 공통 값 )
exports.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const users = yield user_model_1.User.findAll({});
    return res.status(200).send(users);
});
exports.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { user } = req.session;
    if (!user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const { user_type } = user;
    if (user_type !== "M") {
        const currentUserId = Number(user.id);
        if (id !== currentUserId)
            return res.sendStatus(403);
        for (const property in req.body) {
            if (property !== "password")
                return res.sendStatus(403);
        }
    }
    yield user_model_1.User.update(req.body, { where: { id } });
    return res.status(200).send({ message: "정보가 수정되었습니다." });
});
exports.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const { user } = req.session;
    if (!user) {
        return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    }
    const { user_type } = user;
    if (user_type !== "M") {
        const currentUserId = Number(user.id);
        if (id !== currentUserId)
            return res.sendStatus(403);
    }
    const userInfo = yield user_model_1.User.findOne({ where: { id } });
    if (!userInfo) {
        return res.status(404).send({ message: "존재하지 않는 사용자입니다." });
    }
    return res.status(200).send(userInfo);
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
        where: { email },
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
exports.enroll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { name, email, salary, birth, join_date, grade, } = req.body;
    const { user } = req.session;
    // if (!user) {
    // 	return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    // }
    // const { user_type } = user;
    // if (user_type !== "M") {
    // 	return res.sendStatus(403);
    // }
    if (!name || !email || !salary || !birth || !join_date || !grade) {
        return res.status(400).send({ message: "필수값을 입력해주세요." });
    }
    const isExistAccount = yield user_model_1.User.findOne({ where: { email } });
    if (isExistAccount) {
        return res.status(409).send({ message: "이미 존재하는 이메일입니다." });
    }
    yield user_model_1.User.create({
        name,
        email,
        password: "pwd1234!",
        salary,
        birth,
        join_date,
        grade,
    });
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
exports.createDummyUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const FN = ["김", "이", "박", "서", "장"];
    const MN = ["은", "동", "현", "석", "사", "나", "후", "수", "우", "애", "시"];
    const LN = ["문", "훈", "한", "유", "근"];
    const GD = ["사원", "대리", "과장", "차장", "부장", "팀장"];
    const SL = [
        18000000,
        25000000,
        280000000,
        32000000,
        35000000,
        5000000,
        75000000,
    ];
    const BT = [
        "1995-06-01",
        "1972-06-12",
        "1978-07-30",
        "1988-03-12",
        "1984-01-02",
        "1990-10-11",
        "1971-12-15",
    ];
    const JD = [
        "2012-03-02",
        "2013-05-30",
        "2015-06-07",
        "2018-08-15",
        "2019-01-02",
        "2019-02-27",
        "2015-05-17",
        "2015-08-01",
        "2014-11-03",
    ];
    const NICK = [
        "gkdemf",
        "qkffhqo",
        "akfqkfl",
        "libs",
        "gusejr",
        "deock",
        "ab3da",
        "cacle",
        "riders",
        "developer",
        "eng",
        "jks",
    ];
    const password = "pwd1234!";
    for (let i = 0; i < 20; i++) {
        const name = `${FN[Math.ceil(Math.random() * FN.length - 1)]}${MN[Math.ceil(Math.random() * MN.length - 1)]}${LN[Math.ceil(Math.random() * LN.length - 1)]}`;
        const email = `${NICK[Math.ceil(Math.random() * NICK.length - 1)]}${i}@example.com`;
        const grade = `${GD[Math.ceil(Math.random() * GD.length - 1)]}`;
        const salary = `${SL[Math.ceil(Math.random() * SL.length - 1)]}`;
        const birth = `${BT[Math.ceil(Math.random() * BT.length - 1)]}`;
        const join_date = `${JD[Math.ceil(Math.random() * JD.length - 1)]}`;
        yield user_model_1.User.create({
            name,
            email,
            grade,
            salary,
            birth,
            join_date,
            password,
        });
    }
    return res.status(201).send({ message: "더미 데이터 생성 완료 " });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jdHJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlci91c2VyL3VzZXIuY3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFHYix3REFBOEI7QUFFOUIsa0RBQXlDO0FBRXpDLHlDQUF5QztBQUN6QyxvQ0FBb0M7QUFFdkIsUUFBQSxRQUFRLEdBQUcsQ0FDdkIsR0FBWSxFQUNaLEdBQWEsRUFDTyxFQUFFO0lBQ3RCLE1BQU0sS0FBSyxHQUFXLE1BQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFHLENBQ3pCLEdBQVksRUFDWixHQUFhLEVBQ08sRUFBRTtJQUN0QixNQUFNLEVBQUUsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV6QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQVEsQ0FBQztJQUU5QixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7S0FDNUQ7SUFFRCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRTNCLElBQUksU0FBUyxLQUFLLEdBQUcsRUFBRTtRQUN0QixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXRDLElBQUksRUFBRSxLQUFLLGFBQWE7WUFBRSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7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