const Dish = require("../models/Dish");

const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find(); // Fetch all dishes from DB
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching dishes", error: error.message });
    }
};

module.exports = { getAllDishes };
