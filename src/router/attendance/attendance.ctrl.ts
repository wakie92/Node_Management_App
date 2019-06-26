"use strict";

import { Request, Response } from "express";

import { Attendance } from "models/attendance.model";

const createTodayDate = (): string => {
	const d: Date = new Date();
	const year: string = String(d.getFullYear());

	let month: string = (d.getMonth() + 1).toString();
	month = month.length === 2 ? month : `0${month}`;

	let date: string = d.getDate().toString();
	date = date.length === 2 ? date : `0${date}`;

	return `${year}${month}${date}`;
};

const isLate = (): boolean => {
	const d: Date = new Date();

	const hour: number = d.getHours();

	return hour >= 9 ? true : false;
};

export const onWork = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const { user } = req.session!;

	if (!user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요" });
	}

	const { id } = user;

	const formatedDate: string = createTodayDate();

	const attendanceChecker: string = `${id}_${formatedDate}`;

	const isExist: Attendance | null = await Attendance.findOne({
		where: {
			userId: id,
			attendanceChecker,
		},
	});

	if (isExist) {
		return res.status(409).send({ message: "이미 출근처리 되었습니다." });
	}

	const late: boolean = isLate();

	await Attendance.create({
		attendanceChecker,
		late,
		start_time: new Date(),
		userId: id,
	});

	if (late) {
		return res.status(200).send({ message: "지각 처리 되었습니다." });
	}

	return res.status(200).send({ message: "정상 출근 처리 되었습니다." });
};

export const offWork = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const { user } = req.session!;

	if (!user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요" });
	}

	const { id } = user;

	const formatedDate: string = createTodayDate();

	const attendanceChecker: string = `${id}_${formatedDate}`;

	const isAttend: Attendance | null = await Attendance.findOne({
		where: {
			attendanceChecker,
		},
	});

	if (!isAttend) {
		return res
			.status(404)
			.send({ message: "출/퇴근 기록이 존재하지 않습니다." });
	}

	const {
		start_time,
		finish_time,
	}: { start_time: Date; finish_time: Date } = isAttend;

	if (!start_time) {
		return res.status(400).send({
			message: "출근 처리가 되지 않았습니다. 출근 처리를 먼저 해주세요.",
		});
	}

	if (finish_time) {
		return res.status(409).send({ message: "이미 퇴근 처리 되었습니다." });
	}

	await Attendance.update(
		{ finish_time: new Date() },
		{ where: { attendanceChecker } },
	);

	return res.status(200).send({ message: "정상 퇴근 처리되었습니다." });
};
