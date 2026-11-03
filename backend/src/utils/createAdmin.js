import "dotenv/config";
import bcrypt from "bcryptjs";
import prisma from "../config/db.js";

const createAdmin = async () => {
  try {
    const name = process.env.ADMIN_NAME;
    const email = process.env.ADMIN_EMAIL?.toLowerCase();
    const password = process.env.ADMIN_PASSWORD;

    if (!name || !email || !password) {
      throw new Error(
        "ADMIN_NAME, ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env"
      );
    }

    if (password.length < 12) {
      throw new Error("Admin password must contain at least 12 characters");
    }

    const existingAdmin = await prisma.admins.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      console.log("An admin with this email already exists.");
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.admins.create({
      data: {
        name,
        email,
        password_hash: passwordHash,
      },
    });

    console.log("Admin account created successfully");
  } catch (error) {
    console.error("Admin creation failed:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
};

createAdmin();