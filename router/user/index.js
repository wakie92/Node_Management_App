const express = require("express");
const router = express.Router();

const { getUsers, getUser, login, signUp, logout } = require("./user.ctrl");

router.route("/").get(getUsers);

router.route("/login").post(login);

router.route("/sign-up").post(signUp);

router.route("/logout").delete(logout);

router.route("/:id").get(getUser);

module.exports = router;
