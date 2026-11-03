import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    console.error("JWT_SECRET is missing or too short");
    return res.status(500).json({ message: "Authentication is not configured" });
  }
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.status(401).json({ message: "Authentication required" });
  const token = authHeader.slice(7).trim();
  if (!token) return res.status(401).json({ message: "Authentication required" });
  try {
    req.admin = jwt.verify(token, secret);
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
export default authMiddleware;
