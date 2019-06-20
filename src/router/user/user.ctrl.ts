"use strict";

import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({});
  return res.status(200).send(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.status(404).send({ message: "존재하지 않는 사용자입니다." });
  }

  return res.status(200).send(user);
};

export const login = async (req: Request, res: Response) => {
  if (req.session!.user) {
    return res.status(403).send({ message: "이미 로그인 되었습니다." });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(400);
  }

  const isExist = await User.findOne({
    where: { email }
  });

  if (!isExist) {
    return res.status(401).send({ message: "존재하지 않는 사용자입니다." });
  }

  const isCorrectPassword = bcrypt.compareSync(password, isExist.password);

  if (!isCorrectPassword) {
    return res.status(401).send({ message: "비밀번호가 일치하지 않습니다." });
  }

  req.session!.user = isExist;

  req.session!.save(err => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: "Internal Server Error!" });
    }

    return res.status(200).send({ message: "로그인 되었습니다." });
  });
};

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ message: "필수값을 입력해주세요." });
  }

  const isExistAccount = await User.findOne({ where: { email } });

  if (isExistAccount) {
    return res.status(409).send({ message: "이미 존재하는 이메일입니다." });
  }

  await User.create({ name, email, password });
  return res.status(200).send({ message: "회원 등록이 완료 되었습니다." });
};

export const logout = async (req: Request, res: Response) => {
  req.session!.destroy(err => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: "Internal Server Error!" });
    }

    return res.sendStatus(204);
  });
};
