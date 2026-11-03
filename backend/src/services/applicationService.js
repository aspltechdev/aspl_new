
import prisma from "../config/db.js";

// Create job application
export const createApplicationService = async (data) => {
  return await prisma.applications.create({
    data: {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      location: data.location?.trim() || null,
      position: data.position.trim(),
      experience_level: data.experienceLevel?.trim() || null,
      resume_url: data.resumeFilename,
    },
  });
};

// Get all applications with follow-up notes
export const getApplicationsService = async () => {
  return await prisma.applications.findMany({
    include: {
      follow_up_notes: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

// Update application status
export const updateApplicationStatusService = async (id, status) => {
  return await prisma.applications.update({
    where: {
      id: BigInt(id),
    },
    data: {
      status,
      updated_at: new Date(),
    },
  });
};

// Find application for resume download
export const getApplicationByIdService = async (id) => {
  return await prisma.applications.findUnique({
    where: {
      id: BigInt(id),
    },
  });
};
