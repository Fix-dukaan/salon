const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const salonRoutes = require("./routes/salonRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const paymentRouter=require('./routes/paymentRouter')

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());


app.use("/auth", authRoutes);
app.use("/api/salons", salonRoutes);
app.use("/api/appointments", appointmentRoutes); 
app.use("/api/payments", paymentRouter); 

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT =process.env.PORT||5000;
const HOST=process.env.HOST||'192.168.1.3';
app.listen(PORT,HOST,() => {
    console.log(`Server running on port ${HOST}:${PORT}`);
});
