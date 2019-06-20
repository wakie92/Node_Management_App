"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const user_ctrl_1 = require("./user.ctrl");
router.route("/").get(user_ctrl_1.getUsers);
router.route("/login").post(user_ctrl_1.login);
router.route("/sign-up").post(user_ctrl_1.signUp);
router.route("/logout").delete(user_ctrl_1.logout);
router.route("/:id").get(user_ctrl_1.getUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLHFDQUFpQztBQUVqQyxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsMkNBQXVFO0FBRXZFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLG9CQUFRLENBQUMsQ0FBQztBQUVoQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBSyxDQUFDLENBQUM7QUFFbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQU0sQ0FBQyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFNLENBQUMsQ0FBQztBQUV2QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBTyxDQUFDLENBQUM7QUFFbEMsa0JBQWUsTUFBTSxDQUFDIn0=