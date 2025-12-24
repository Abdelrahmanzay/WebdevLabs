import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment configuration
dotenv.config();

const databaseConnectionString = process.env.MONGO_URI;

/**
 * Initializes the connection to MongoDB database
 * @returns {Promise<void>}
 */
export async function initializeDatabaseConnection() {
  try {
    await mongoose.connect(databaseConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Successfully connected to MongoDB database");
  } catch (connectionError) {
    console.error(
      "❌ Failed to establish MongoDB connection:",
      connectionError.message
    );
    process.exit(1);
  }
}

export default initializeDatabaseConnection;
