"use strict";

import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";

import { User } from "../../models/user.model";

exports.getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const users = await User.findAll({});
  res.status(200).send(users);
};

exports.getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    res.status(404).send({ message: "존재하지 않는 사용자입니다." });
    return;
  }

  return res.status(200).send(user);
};

exports.login = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session!.user) {
    res.status(403).send({ message: "이미 로그인 되었습니다." });
    return;
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.sendStatus(400);
    return;
  }

  const isExist = await User.findOne({
    where: { email }
  });

  if (!isExist) {
    res.status(401).send({ message: "존재하지 않는 사용자입니다." });
    return;
  }

  const isCorrectPassword = bcrypt.compareSync(password, isExist.password);

  if (!isCorrectPassword) {
    res.status(401).send({ message: "비밀번호가 일치하지 않습니다." });
    return;
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

exports.signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send({ message: "필수값을 입력해주세요." });
    return;
  }

  const isExistAccount = await User.findOne({ where: { email } });

  if (isExistAccount) {
    res.status(409).send({ message: "이미 존재하는 이메일입니다." });
    return;
  }

  await User.create({ name, email, password });
  return res.status(200).send({ message: "회원 등록이 완료 되었습니다." });
};

exports.logout = async (req: Request, res: Response, next: NextFunction) => {
  req.session!.destroy(err => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error!" });
      return;
    }

    return res.sendStatus(204);
  });
};
