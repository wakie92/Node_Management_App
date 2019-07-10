"use strict";

import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "models/user.model";

// TODO:  회원정보 수정 ( 관리자 / 본인 - 패스워드만 가능 )
// TODO: 회원등록 최초, 패스워드 기본 값 ( 공통 값 )

export const getUsers = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const users: User[] = await User.findAll({});
	console.log(users);
	return res.status(200).send(users);
};

export const updateUser = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const id: number = Number(req.params.id);

	// const { user } = req.session!;

	// if (!user) {
	// 	return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	// }

	// const { user_type } = user;

	// if (user_type !== "M") {
	// 	const currentUserId = Number(user.id);

	// 	if (id !== currentUserId) return res.sendStatus(403);

	// 	for (const property in req.body) {
	// 		if (property !== "password") return res.sendStatus(403);
	// 	}
	// }

	await User.update(req.body, { where: { id } });
	return res.status(200).send({ message: "정보가 수정되었습니다." });
};

export const getUser = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const id: number = req.params.id;

	// const { user } = req.session!;

	// if (!user) {
	// 	return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	// }

	// const { user_type } = user;

	// if (user_type !== "M") {
	// 	const currentUserId = Number(user.id);

	// 	if (id !== currentUserId) return res.sendStatus(403);
	// }

	const userInfo: User | null = await User.findOne({ where: { id } });

	if (!userInfo) {
		return res.status(404).send({ message: "존재하지 않는 사용자입니다." });
	}

	return res.status(200).send(userInfo);
};

export const login = async (
	req: Request,
	res: Response,
): Promise<Response | undefined> => {
	// if (req.session!.user) {
	// 	return res.status(403).send({ message: "이미 로그인 되었습니다." });
	// }

	const { email, password }: { email: string; password: string } = req.body;

	if (!email || !password) {
		return res.sendStatus(400);
	}

	const isExist: User | null = await User.findOne({
		where: { email },
	});

	if (!isExist) {
		return res.status(401).send({ message: "존재하지 않는 사용자입니다." });
	}

	const isCorrectPassword: boolean = bcrypt.compareSync(
		password,
		isExist.password,
	);

	if (!isCorrectPassword) {
		return res.status(401).send({ message: "비밀번호가 일치하지 않습니다." });
	}

	req.session!.user = isExist;

	req.session!.save(err => {
		if (err) {
			console.error(err);
			return res.status(500).send({ message: "Internal Server Errornternal Server Error!" });
		}

		return res.status(200).send({ message: "로그인 되었습니다." });
	});
};

export const enroll = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const {
		name,
		email,
		salary,
		birth,
		join_date,
		grade,
	}: {
		name: string;
		email: string;
		salary: number;
		birth: Date;
		join_date: Date;
		grade: string;
	} = req.body;

	// const { user } = req.session!;

	// if (!user) {
	// 	return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	// }

	// const { user_type } = user;

	// if (user_type !== "M") {
	// 	return res.sendStatus(403);
	// }
	console.log(req.body);
	if (!name || !email || !salary || !birth || !join_date || !grade) {
		return res.status(400).send({ message: "필수값을 입력해주세요." });
	}

	const isExistAccount: User | null = await User.findOne({ where: { email } });

	if (isExistAccount) {
		return res.status(409).send({ message: "이미 존재하는 이메일입니다." });
	}

	await User.create({
		name,
		email,
		password: "pwd1234!",
		salary,
		birth,
		join_date,
		grade,
	});
	return res.status(200).send({ message: "회원 등록이 완료 되었습니다." });
};

export const logout = async (
	req: Request,
	res: Response,
): Promise<Response | void> => {
	req.session!.destroy(err => {
		if (err) {
			console.error(err);
			return res.status(500).send({ message: "Internal Server Error!" });
		}

		return res.sendStatus(204);
	});
};

export const createDummyUsers = async (
	req: Request,
	res: Response,
): Promise<Response> => {
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
		const name = `${FN[Math.ceil(Math.random() * FN.length - 1)]}${
			MN[Math.ceil(Math.random() * MN.length - 1)]
		}${LN[Math.ceil(Math.random() * LN.length - 1)]}`;

		const email = `${
			NICK[Math.ceil(Math.random() * NICK.length - 1)]
		}${i}@example.com`;
		const grade = `${GD[Math.ceil(Math.random() * GD.length - 1)]}`;
		const salary = `${SL[Math.ceil(Math.random() * SL.length - 1)]}`;
		const birth = `${BT[Math.ceil(Math.random() * BT.length - 1)]}`;
		const join_date = `${JD[Math.ceil(Math.random() * JD.length - 1)]}`;

		await User.create({
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
};
