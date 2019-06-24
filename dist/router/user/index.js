"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const user_ctrl_1 = require("./user.ctrl");
router.route("/dummy").post(user_ctrl_1.createDummyUsers);
router.route("/").get(user_ctrl_1.getUsers);
router.route("/login").post(user_ctrl_1.login);
router.route("/enroll").post(user_ctrl_1.enroll);
router.route("/logout").delete(user_ctrl_1.logout);
router
    .route("/:id")
    .get(user_ctrl_1.getUser)
    .put(user_ctrl_1.updateUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVyL3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLHFDQUFpQztBQUVqQyxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsMkNBUXFCO0FBRXJCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUFnQixDQUFDLENBQUM7QUFFOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsb0JBQVEsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFLLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBTSxDQUFDLENBQUM7QUFFckMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQU0sQ0FBQyxDQUFDO0FBRXZDLE1BQU07S0FDSixLQUFLLENBQUMsTUFBTSxDQUFDO0tBQ2IsR0FBRyxDQUFDLG1CQUFPLENBQUM7S0FDWixHQUFHLENBQUMsc0JBQVUsQ0FBQyxDQUFDO0FBRWxCLGtCQUFlLE1BQU0sQ0FBQyJ9