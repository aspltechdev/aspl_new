import prisma from "../config/db.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const loginAdmin = async (req, res) => {
  try {
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password = typeof req.body.password === "string" ? req.body.password : "";
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const admin = await prisma.admins.findUnique({ where: { email } });
    if (!admin || !(await bcrypt.compare(password, admin.password_hash))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(admin);
    return res.status(200).json({
      message: "Login successful", token,
      admin: { id: admin.id.toString(), name: admin.name, email: admin.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
};
