
import express from "express";

import {
  getPublicSocialLinks,
  getAllSocialLinks,
  createSocialLink,
  updateSocialLink,
  toggleSocialLink,
  deleteSocialLink,
} from "../controllers/socialLinkController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public website
router.get("/", getPublicSocialLinks);

// Admin routes
router.get("/admin", authMiddleware, getAllSocialLinks);
router.post("/", authMiddleware, createSocialLink);
router.put("/:id", authMiddleware, updateSocialLink);
router.patch("/:id/toggle", authMiddleware, toggleSocialLink);
router.delete("/:id", authMiddleware, deleteSocialLink);

export default router;
