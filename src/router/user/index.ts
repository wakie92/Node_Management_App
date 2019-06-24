"use strict";

import { Router } from "express";

const router = Router();

import {
	getUsers,
	getUser,
	login,
	enroll,
	logout,
	updateUser,
	createDummyUsers,
} from "./user.ctrl";

router.route("/dummy").post(createDummyUsers);

router.route("/").get(getUsers);

router.route("/login").post(login);

router.route("/enroll").post(enroll);

router.route("/logout").delete(logout);

router
	.route("/:id")
	.get(getUser)
	.put(updateUser);

export default router;
