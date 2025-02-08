const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const dishRoutes = require("./routes/dishRoutes");

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes); // Authentication routes
app.use("/api/dishes", dishRoutes); // Dish routes

// Test Route
app.get("/", (req, res) => {
    res.send("FoodiePal API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
