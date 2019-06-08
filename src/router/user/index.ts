"use strict";

import { Router } from "express";

const router = Router();

const { getUsers, getUser, login, signUp, logout } = require("./user.ctrl");

router.route("/").get(getUsers);

router.route("/login").post(login);

router.route("/sign-up").post(signUp);

router.route("/logout").delete(logout);

router.route("/:id").get(getUser);

export default router;
