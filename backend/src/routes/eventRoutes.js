import express from "express";
import { createEvent } from "../controllers/auth/eventController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/event/create",protect,createEvent);

export default router;