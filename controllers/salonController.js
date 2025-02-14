const Salon = require("../models/Salon");

const getAllSalons = async (req, res) => {
    try {
        const salons = await Salon.find(); 
        res.status(200).json(salons);
    } catch (error) {
        res.status(500).json({ message: "Error fetching salons", error: error.message });
    }
};

module.exports = { getAllSalons };

