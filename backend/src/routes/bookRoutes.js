import express from "express";
import { createBook } from "../controllers/auth/bookController.js";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/book/create",protect,createBook);

export default router;