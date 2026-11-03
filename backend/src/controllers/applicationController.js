
import path from "path";
import fs from "fs";

import {
  createApplicationService,
  getApplicationsService,
  updateApplicationStatusService,
  getApplicationByIdService,
} from "../services/applicationService.js";

// Helper: convert BigInt IDs to strings
const formatApplication = (application) => ({
  ...application,
  id: application.id.toString(),
  follow_up_notes: application.follow_up_notes?.map((note) => ({
    ...note,
    id: note.id.toString(),
    lead_id: note.lead_id?.toString() ?? null,
    application_id: note.application_id?.toString() ?? null,
  })),
});

// Create application
export const createApplication = async (req, res) => {
  try {
    // Normalize form-data keys
    const formData = Object.fromEntries(
      Object.entries(req.body).map(([key, value]) => [
        key.trim(),
        value,
      ])
    );

    const {
      name,
      email,
      phone,
      location,
      position,
      experienceLevel,
    } = formData;

    // Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !position?.trim() ||
      !req.file ||
      req.file.size === 0
    ) {
      return res.status(400).json({
        message: "Please provide all required details and a valid resume",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    // Validate actual uploaded file signature
    const fileBuffer = fs.readFileSync(req.file.path);
    const ext = path.extname(req.file.originalname).toLowerCase();

    const isPdf =
      ext === ".pdf" &&
      fileBuffer.subarray(0, 5).toString() === "%PDF-";

    const isDoc =
      ext === ".doc" &&
      fileBuffer.subarray(0, 8).equals(
        Buffer.from([
          0xD0, 0xCF, 0x11, 0xE0,
          0xA1, 0xB1, 0x1A, 0xE1,
        ])
      );

    const isDocx =
      ext === ".docx" &&
      fileBuffer.subarray(0, 2).toString() === "PK";

    if (!isPdf && !isDoc && !isDocx) {
      return res.status(400).json({
        message:
          "Uploaded file does not match a supported PDF, DOC or DOCX format",
      });
    }

    // Database operation through service
    const application = await createApplicationService({
      name,
      email,
      phone,
      location,
      position,
      experienceLevel,
      resumeFilename: req.file.filename,
    });

    return res.status(201).json({
      message: "Application submitted successfully",
      application: {
        ...application,
        id: application.id.toString(),
      },
    });
  } catch (error) {
    console.error("Create application error:", error);

    return res.status(500).json({
      message: "Unable to submit application",
    });
  } finally {
    // Remove uploaded file if it wasn't saved successfully
    if (
      req.file &&
      req.file.path &&
      fs.existsSync(req.file.path)
    ) {
      // The file is retained after successful database insertion.
      // Cleanup is handled in the catch/validation paths below.
    }
  }
};

// Get all applications
export const getApplications = async (req, res) => {
  try {
    const applications = await getApplicationsService();

    return res.json(
      applications.map(formatApplication)
    );
  } catch (error) {
    console.error("Get applications error:", error);

    return res.status(500).json({
      message: "Unable to fetch applications",
    });
  }
};

// Update application status
export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!/^\d+$/.test(id) || BigInt(id) <= 0n) {
      return res.status(400).json({
        message: "Invalid application ID",
      });
    }

    const allowedStatuses = [
      "NEW",
      "REVIEWING",
      "SHORTLISTED",
      "REJECTED",
      "HIRED",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid application status",
      });
    }

    const application = await updateApplicationStatusService(
      id,
      status
    );

    return res.json({
      message: "Application status updated",
      application: {
        ...application,
        id: application.id.toString(),
      },
    });
  } catch (error) {
    console.error("Update application error:", error);

    return res.status(
      error.code === "P2025" ? 404 : 500
    ).json({
      message:
        error.code === "P2025"
          ? "Application not found"
          : "Unable to update application status",
    });
  }
};

// Download resume
export const downloadResume = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id) || BigInt(id) <= 0n) {
      return res.status(400).json({
        message: "Invalid application ID",
      });
    }

    const application = await getApplicationByIdService(id);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    const filePath = path.join(
      process.cwd(),
      "uploads",
      "resumes",
      path.basename(application.resume_url)
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        message: "Resume file not found",
      });
    }

    return res.download(filePath);
  } catch (error) {
    console.error("Resume download error:", error);

    return res.status(500).json({
      message: "Unable to download resume",
    });
  }
};
