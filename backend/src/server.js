import "dotenv/config";
import app from "./app.js";
import prisma from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("PostgreSQL connected successfully");

    const server = app.listen(PORT, "127.0.0.1", () => {
      console.log(`Server listening at http://127.0.0.1:${PORT}`);
    });

    server.on("close", () => {
      console.log("EXPRESS SERVER CLOSED");
    });

    server.on("error", (error) => {
      console.error("EXPRESS SERVER ERROR:", error);
    });

    console.log("Server object created:", server.listening);
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();