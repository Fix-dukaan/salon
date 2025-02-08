require("dotenv").config();
const mongoose = require("mongoose");
const Dish = require("./models/Dish"); // Ensure you have a Dish schema in models/Dish.js
const dishesData = require("./dishes.json");

const uploadDishes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Insert dishes into the database
        const result = await Dish.insertMany(dishesData);
        console.log("Dishes uploaded successfully:", result);

        process.exit(0);
    } catch (error) {
        console.error("Error uploading dishes:", error.message);
        process.exit(1);
    }
};

uploadDishes();
