
import prisma from "../config/db.js";

// Create new contact enquiry
export const createLeadService = async (data) => {
  return await prisma.leads.create({
    data: {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      company: data.company?.trim() || null,
      service: data.service?.trim() || null,
      message: data.message.trim(),
    },
  });
};

// Get all leads with follow-up notes
export const getLeadsService = async () => {
  return await prisma.leads.findMany({
    include: {
      follow_up_notes: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

// Update lead status
export const updateLeadStatusService = async (id, status) => {
  return await prisma.leads.update({
    where: {
      id: BigInt(id),
    },
    data: {
      status,
      updated_at: new Date(),
    },
  });
};

// Get lead by ID
export const getLeadByIdService = async (id) => {
  return await prisma.leads.findUnique({
    where: {
      id: BigInt(id),
    },
  });
};
