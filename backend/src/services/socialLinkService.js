
import prisma from "../config/db.js";

const validPlatforms = [
  "Instagram",
  "LinkedIn",
  "Facebook",
  "YouTube",
  "X",
];

const validatePlatform = (platform) => {
  if (!validPlatforms.includes(platform)) {
    throw new Error("Invalid social media platform");
  }
};

const validateUrl = (url) => {
  try {
    const parsedUrl = new URL(url);

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      throw new Error();
    }

    return parsedUrl.toString();
  } catch {
    throw new Error("Please provide a valid HTTP or HTTPS URL");
  }
};

// Get active links for public website
export const getPublicLinksService = async () => {
  return await prisma.social_links.findMany({
    where: { is_active: true },
    orderBy: { sort_order: "asc" },
  });
};

// Get all links for admin
export const getAllLinksService = async () => {
  return await prisma.social_links.findMany({
    orderBy: { sort_order: "asc" },
  });
};

// Add social link
export const createLinkService = async (data) => {
  const { platform, url, is_active = true, sort_order = 0 } = data;

  validatePlatform(platform);

  if (typeof url !== "string") {
    throw new Error("URL is required");
  }

  if (typeof is_active !== "boolean") {
    throw new Error("is_active must be true or false");
  }

  if (!Number.isInteger(sort_order)) {
    throw new Error("Sort order must be an integer");
  }

  return await prisma.social_links.create({
    data: {
      platform,
      url: validateUrl(url),
      is_active,
      sort_order,
    },
  });
};

// Update social link
export const updateLinkService = async (id, data) => {
  const linkId = BigInt(id);

  const existing = await prisma.social_links.findUnique({
    where: { id: linkId },
  });

  if (!existing) {
    throw new Error("Social link not found");
  }

  const updateData = {};

  if (data.platform !== undefined) {
    validatePlatform(data.platform);
    updateData.platform = data.platform;
  }

  if (data.url !== undefined) {
    if (typeof data.url !== "string") {
      throw new Error("Invalid URL");
    }

    updateData.url = validateUrl(data.url);
  }

  if (data.is_active !== undefined) {
    if (typeof data.is_active !== "boolean") {
      throw new Error("is_active must be true or false");
    }

    updateData.is_active = data.is_active;
  }

  if (data.sort_order !== undefined) {
    if (!Number.isInteger(data.sort_order)) {
      throw new Error("Sort order must be an integer");
    }

    updateData.sort_order = data.sort_order;
  }

  return await prisma.social_links.update({
    where: { id: linkId },
    data: updateData,
  });
};

// Toggle active status
export const toggleLinkService = async (id) => {
  const linkId = BigInt(id);

  const existing = await prisma.social_links.findUnique({
    where: { id: linkId },
  });

  if (!existing) {
    throw new Error("Social link not found");
  }

  return await prisma.social_links.update({
    where: { id: linkId },
    data: {
      is_active: !existing.is_active,
    },
  });
};

// Delete social link
export const deleteLinkService = async (id) => {
  const linkId = BigInt(id);

  const existing = await prisma.social_links.findUnique({
    where: { id: linkId },
  });

  if (!existing) {
    throw new Error("Social link not found");
  }

  return await prisma.social_links.delete({
    where: { id: linkId },
  });
};
