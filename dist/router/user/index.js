"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// import {
//   getUsers,
//   getUser,
//   login,
//   signUp,
//   logout
// } from "router/user/user.ctrl";
const user_ctrl_1 = require("./user.ctrl");
router.route("/").get(user_ctrl_1.getUsers);
router.route("/login").post(user_ctrl_1.login);
router.route("/sign-up").post(user_ctrl_1.signUp);
router.route("/logout").delete(user_ctrl_1.logout);
router.route("/:id").get(user_ctrl_1.getUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLHFDQUFpQztBQUVqQyxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsV0FBVztBQUNYLGNBQWM7QUFDZCxhQUFhO0FBQ2IsV0FBVztBQUNYLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0NBQWtDO0FBRWxDLDJDQUF1RTtBQUV2RSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxvQkFBUSxDQUFDLENBQUM7QUFFaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQUssQ0FBQyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFNLENBQUMsQ0FBQztBQUV0QyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBTSxDQUFDLENBQUM7QUFFdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsbUJBQU8sQ0FBQyxDQUFDO0FBRWxDLGtCQUFlLE1BQU0sQ0FBQyJ9