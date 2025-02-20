import express from "express";
import { createGoals } from "../controllers/auth/goalsController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/goals/create",protect, createGoals);

export default router;