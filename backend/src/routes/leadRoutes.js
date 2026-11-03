import express from "express";
import {
  createLead,
  getLeads,
  updateLeadStatus,
} from "../controllers/leadController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public website contact form
router.post("/", createLead);

// Protected CRM endpoints
router.get("/", authMiddleware, getLeads);
router.patch("/:id/status", authMiddleware, updateLeadStatus);

export default router;