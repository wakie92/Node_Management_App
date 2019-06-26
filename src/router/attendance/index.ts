"use strict";

import { Router } from "express";

const router = Router();

import { onWork, offWork } from "./attendance.ctrl";

router.route("/work-on").post(onWork);

router.route("/work-off").post(offWork);

export default router;
