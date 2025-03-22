const mongoose = require("mongoose");

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, 
  address: { type: String, required: true },
  services: [
    {
      service_name: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  availableDates: [
    {
      date: { type: String, required: true },
      availableTimes: [{ type: String, required: true }]
    }
  ],
  image: { type: String, required: true }
});

salonSchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model("Salon", salonSchema);
