
import prisma from "../config/db.js";
import bcrypt from "bcryptjs";

// Find admin by email
export const findAdminByEmailService = async (email) => {
  return await prisma.admins.findUnique({
    where: {
      email: email.trim().toLowerCase(),
    },
  });
};

// Verify admin password
export const verifyAdminPasswordService = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};
