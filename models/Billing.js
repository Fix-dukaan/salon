const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    total: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["credit card", "paypal", "cash"], required: true },
});

module.exports = mongoose.model("Billing", billingSchema);
