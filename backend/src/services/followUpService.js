
import prisma from "../config/db.js";

// Create follow-up note
export const createFollowUpService = async (data) => {
  return await prisma.follow_up_notes.create({
    data: {
      note: data.note.trim(),
      follow_up_date: data.follow_up_date
        ? new Date(data.follow_up_date)
        : null,

      ...(data.lead_id
        ? { lead_id: BigInt(data.lead_id) }
        : {}),

      ...(data.application_id
        ? { application_id: BigInt(data.application_id) }
        : {}),
    },
  });
};

// Get follow-up notes for a lead
export const getLeadFollowUpsService = async (leadId) => {
  return await prisma.follow_up_notes.findMany({
    where: { lead_id: BigInt(leadId) },
    orderBy: { created_at: "desc" },
  });
};

// Get follow-up notes for an application
export const getApplicationFollowUpsService = async (applicationId) => {
  return await prisma.follow_up_notes.findMany({
    where: { application_id: BigInt(applicationId) },
    orderBy: { created_at: "desc" },
  });
};
