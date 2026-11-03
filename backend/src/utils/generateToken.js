import jwt from "jsonwebtoken";

const generateToken = (admin) => {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error("JWT_SECRET must be configured with at least 32 characters");
  }
  return jwt.sign({ id: admin.id.toString(), email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
export default generateToken;
