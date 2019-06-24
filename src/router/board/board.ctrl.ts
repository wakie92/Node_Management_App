"use strict";

import { Request, Response } from "express";

import { Board } from "models/board.model";

// 게시판 리스트
export const getBoards = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	if (!req.session!.user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	}

	const boards: Board[] = await Board.findAll({});
	return res.status(200).send(boards);
};

// 게시판 작성
export const createBoard = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	if (!req.session!.user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	}

	await Board.create(req.body);

	return res.status(201).send({ message: "게시글 등록이 완료되었습니다." });
};

// 게시판 상세
export const getBoard = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const { id } = req.params;

	if (!req.session!.user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	}

	const board: Board | null = await Board.findOne({ where: { id } });

	if (!board) {
		return res.status(404).send({ message: "존재하지 않는 게시글입니다." });
	}

	await Board.update({ view: board.view + 1 }, { where: { id } });

	return res.status(200).send(board);
};

// 게시판 수정
export const updateBoard = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const { id } = req.params;

	if (!req.session!.user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	}

	await Board.update(req.body, { where: { id } });

	return res.sendStatus(204);
};

export const destoryBoard = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	const { id } = req.params;

	if (!req.session!.user) {
		return res.status(401).send({ message: "로그인 이후에 이용해주세요." });
	}

	await Board.destroy({ where: { id } });

	return res.sendStatus(204);
};
