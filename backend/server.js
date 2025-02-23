require("dotenv").config({ path: __dirname + "/.env" });

console.log("MONGO_URI from .env:", process.env.MONGO_URI); // Debugging

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Keep CORS middleware
const authRoutes = require("./routes/authRoutes"); // ✅ Change import to require

const app = express();
app.use(express.json());
app.use(cors()); // ✅ Enable CORS

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

connectDB();

// ✅ Use authentication routes
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
