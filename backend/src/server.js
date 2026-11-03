
import "dotenv/config";
import app from "./app.js";
import prisma from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Verify PostgreSQL connection
    await prisma.$connect();

    console.log("PostgreSQL connected successfully");

    // Start Express server
    app.listen(PORT, () => {
      console.log(
        `ASPL CRM backend running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Failed to start ASPL CRM backend:", error);
    process.exit(1);
  }
};

startServer();
