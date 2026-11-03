import prisma from "../config/db.js";

export const createFollowUp = async (req, res) => {
  try {
    const { lead_id, application_id, note, follow_up_date } = req.body;

    // A note must belong to exactly one lead or application.
    if ((!lead_id && !application_id) || (lead_id && application_id)) {
      return res.status(400).json({
        message: "Provide either lead_id or application_id",
      });
    }

    if (!note?.trim()) {
      return res.status(400).json({
        message: "Note is required",
      });
    }

    const selectedId = lead_id || application_id;
    if (!/^\d+$/.test(String(selectedId)) || BigInt(selectedId) <= 0n) {
      return res.status(400).json({ message: "Invalid lead or application ID" });
    }

    const data = {
      note: note.trim(),
      follow_up_date: follow_up_date
        ? new Date(follow_up_date)
        : null,
      ...(lead_id ? { lead_id: BigInt(lead_id) } : {}),
      ...(application_id
        ? { application_id: BigInt(application_id) }
        : {}),
    };

    if (data.follow_up_date && Number.isNaN(data.follow_up_date.getTime())) {
      return res.status(400).json({
        message: "Invalid follow-up date",
      });
    }

    const followUp = await prisma.follow_up_notes.create({
      data,
    });

    return res.status(201).json({
      message: "Follow-up note added",
      followUp: {
        ...followUp,
        id: followUp.id.toString(),
        lead_id: followUp.lead_id?.toString() ?? null,
        application_id: followUp.application_id?.toString() ?? null,
      },
    });
  } catch (error) {
    console.error("Create follow-up error:", error);

    return res.status(400).json({
      message: "Unable to add follow-up note. Check the supplied record ID.",
    });
  }
};