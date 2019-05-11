import { User } from "../../../models";
import bcrypt from "bcryptjs";

export const getUserList = async () => await User.findAll({});

export const getUser = async id => await User.findOne({ where: { id } });

export const createUser = async user => await User.create(user);

export const loginUser = async (email, password) => {
  const isExistUser = await User.findOne({ where: { email } });
  if (!isExistUser) throw new Error("존재하지 않는 사용자입니다.");

  const { password: userPassword } = isExistUser;

  const isCorrectPassword = bcrypt.compareSync(password, userPassword);
  if (!isCorrectPassword) throw new Error("잘못된 패스워드입니다.");

  return isExistUser;
};
