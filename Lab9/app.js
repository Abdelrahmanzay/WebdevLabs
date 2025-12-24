import express from "express";
import dotenv from "dotenv";
import { initializeDatabaseConnection } from "./database.js";
import courseApiRoutes from "./routes.js";

// Load environment variables
dotenv.config();

// Initialize Express application
const server = express();
const serverPort = process.env.PORT || 3000;

// Middleware configuration
server.use(express.json());

// Establish database connection
initializeDatabaseConnection();

// API route configuration
server.use("/courses", courseApiRoutes);

// Start the server
server.listen(serverPort, () => {
  console.log(
    `🚀 Application server is running on http://localhost:${serverPort}`
  );
});
