
import prisma from "../config/db.js";

export const createLead = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = req.body;

    if (![name, email, phone, message].every(
      (value) => typeof value === "string" && value.trim()
    )) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and message are required",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const lead = await prisma.leads.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: typeof company === "string" ? company.trim() || null : null,
        service: typeof service === "string" ? service.trim() || null : null,
        message: message.trim(),
      },
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      lead: {
        ...lead,
        id: lead.id.toString(),
      },
    });
  } catch (error) {
    console.error("Create lead error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit enquiry",
    });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await prisma.leads.findMany({
      include: {
        follow_up_notes: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return res.json(
      leads.map((lead) => ({
        ...lead,
        id: lead.id.toString(),
        follow_up_notes: lead.follow_up_notes.map((item) => ({
          ...item,
          id: item.id.toString(),
          lead_id: item.lead_id?.toString() ?? null,
          application_id: item.application_id?.toString() ?? null,
        })),
      }))
    );
  } catch (error) {
    console.error("Get leads error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch leads",
    });
  }
};

export const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const id = req.params.id;

    if (!/^[1-9]\d*$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid lead ID",
      });
    }

    const allowedStatuses = [
      "NEW",
      "CONTACTED",
      "IN_PROGRESS",
      "CONVERTED",
      "CLOSED",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid lead status",
      });
    }

    const lead = await prisma.leads.update({
      where: {
        id: BigInt(id),
      },
      data: {
        status,
        updated_at: new Date(),
      },
    });

    return res.json({
      success: true,
      message: "Lead status updated",
      lead: {
        ...lead,
        id: lead.id.toString(),
      },
    });
  } catch (error) {
    console.error("Update lead error:", error);

    return res.status(404).json({
      success: false,
      message: "Lead not found or invalid ID",
    });
  }
};
