import express from "express";
import { createWebsite } from "../controllers/auth/websiteController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/website/create",protect,createWebsite);

export default router;