import express from "express";
import { createMeeting } from "../controllers/auth/meetingController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/meeting/create",protect,createMeeting);

export default router;