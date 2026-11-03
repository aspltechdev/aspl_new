
import {
  getPublicLinksService,
  getAllLinksService,
  createLinkService,
  updateLinkService,
  toggleLinkService,
  deleteLinkService,
} from "../services/socialLinkService.js";

// Convert BigInt IDs before sending JSON
const formatLink = (link) => ({
  ...link,
  id: link.id.toString(),
});

// GET public social links
export const getPublicSocialLinks = async (req, res) => {
  try {
    const links = await getPublicLinksService();

    res.status(200).json({
      success: true,
      data: links.map(formatLink),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch social links",
    });
  }
};

// GET all admin social links
export const getAllSocialLinks = async (req, res) => {
  try {
    const links = await getAllLinksService();

    res.status(200).json({
      success: true,
      data: links.map(formatLink),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch social links",
    });
  }
};

// POST create social link
export const createSocialLink = async (req, res) => {
  try {
    const link = await createLinkService(req.body);

    res.status(201).json({
      success: true,
      message: "Social link added successfully",
      data: formatLink(link),
    });
  } catch (error) {
    const status = error.message.includes("not found") ? 404 : 400;

    res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};

// PUT update social link
export const updateSocialLink = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid social link ID",
      });
    }

    const link = await updateLinkService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Social link updated successfully",
      data: formatLink(link),
    });
  } catch (error) {
    const status = error.message === "Social link not found" ? 404 : 400;

    res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};

// PATCH toggle status
export const toggleSocialLink = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid social link ID",
      });
    }

    const link = await toggleLinkService(id);

    res.status(200).json({
      success: true,
      message: "Social link status updated",
      data: formatLink(link),
    });
  } catch (error) {
    const status = error.message === "Social link not found" ? 404 : 400;

    res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE social link
export const deleteSocialLink = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid social link ID",
      });
    }

    await deleteLinkService(id);

    res.status(200).json({
      success: true,
      message: "Social link deleted successfully",
    });
  } catch (error) {
    const status = error.message === "Social link not found" ? 404 : 400;

    res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};
