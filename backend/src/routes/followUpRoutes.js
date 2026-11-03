import express from "express";
import { createFollowUp } from "../controllers/followUpController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createFollowUp);

export default router;