import { User } from "../../../models";

export const getUserList = async () => await User.findAll({});

export const getUser = async id => await User.findOne({ where: { id } });
