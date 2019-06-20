"use strict";

import { Router } from "express";

const router = Router();

import { getUsers, getUser, login, signUp, logout } from "./user.ctrl";

router.route("/").get(getUsers);

router.route("/login").post(login);

router.route("/sign-up").post(signUp);

router.route("/logout").delete(logout);

router.route("/:id").get(getUser);

export default router;
