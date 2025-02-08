const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    authProvider: { type: String, enum: ["email", "google", "facebook"], default: "email" },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
});

module.exports = mongoose.model("User", userSchema);
