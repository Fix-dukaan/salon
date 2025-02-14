const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  salon_id: { type: mongoose.Schema.Types.ObjectId, ref: "Salon", required: true },
  services: [
    {
      service_name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  date: { type: Date, required: true },
  time: { type: String, required: true },
  payment: {
    amount: { type: Number, required: true },
    method: { type: String, required: true }, 
    status: { type: String, required: true }, 
    transaction_id: { type: String, required: true }
  },
  status: { type: String, default: "booked" } 
});

module.exports = mongoose.model("Appointment", appointmentSchema);
