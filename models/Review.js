const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    dish: { type: mongoose.Schema.Types.ObjectId, ref: "Dish", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
});

module.exports = mongoose.model("Review", reviewSchema);
