import express from "express";
import cors from "cors";
import socialLinkRoutes from "./routes/socialLinkRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import followUpRoutes from "./routes/followUpRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

app.use(
  cors({
    origin: (process.env.CLIENT_URL || "http://localhost:5173").split(",").map((value) => value.trim()),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "ASPL CRM Backend is running",
  });
});

// API routes
app.use("/api/social-links", socialLinkRoutes);
app.get("/debug-routes", (req, res) => {
  res.json({
    socialLinksMounted: true,
    routes: socialLinkRoutes.stack.map((r) => ({
      path: r.route?.path,
      methods: r.route?.methods,
    })),
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/follow-ups", followUpRoutes);
app.use("/api/dashboard", dashboardRoutes);

// General error handler
app.use((err, req, res, next) => {
  console.error("Express error:", err);

  if (err.name === "MulterError") {
    return res.status(400).json({
      message:
        err.code === "LIMIT_FILE_SIZE"
          ? "Resume must be 5 MB or smaller"
          : err.message,
    });
  }

  const status = Number.isInteger(err.status) && err.status >= 400 && err.status < 600 ? err.status : 500;
  return res.status(status).json({
    message: status === 500 ? "Internal server error" : (err.message || "Bad request"),
  });
});

export default app;