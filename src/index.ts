import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentRoutes"; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

console.log("Mongo URI:", process.env.MONGODB_URI);

const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
  throw new Error("MONGODB_URI not defined in .env");
}

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
