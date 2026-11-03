import express from "express";

import {
  createApplication,
  getApplications,
  updateApplicationStatus,
  downloadResume,
} from "../controllers/applicationController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public application submission
router.post("/", upload.single("resume"), createApplication);

// Protected admin routes
router.get("/", authMiddleware, getApplications);

router.patch(
  "/:id/status",
  authMiddleware,
  updateApplicationStatus
);

router.get(
  "/:id/resume",
  authMiddleware,
  downloadResume
);

export default router;