require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const Dish = require("./models/Dish");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        
        
        const dish = new Dish({ name: "Pizza", description: "Delicious cheese pizza", price: 9.99 });
        await dish.save();

        console.log("Sample data inserted successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error testing schemas:", error);
        process.exit(1);
    }
};

connectDB();
