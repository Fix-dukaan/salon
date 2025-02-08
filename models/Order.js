const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            dish: { type: mongoose.Schema.Types.ObjectId, ref: "Dish", required: true },
            quantity: { type: Number, default: 1 },
        },
    ],
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "delivered", "completed"],
        default: "pending",
    },
    billing: { type: mongoose.Schema.Types.ObjectId, ref: "Billing" },
});

module.exports = mongoose.model("Order", orderSchema);
