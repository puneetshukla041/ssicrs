import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI inside .env.local");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "crs", // Force connection to CRS DB
    } as mongoose.ConnectOptions); // <-- cast to avoid TS error

    isConnected = true;
    console.log("✅ MongoDB connected to CRS DB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
