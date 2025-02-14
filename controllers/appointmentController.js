const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");
const User = require("../models/User");
const Salon = require("../models/Salon");

exports.createAppointment = async (req, res) => {
  const { user_id, salon_id, services, date, time, payment } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ error: "Invalid user_id format" });
    }
    if (!mongoose.Types.ObjectId.isValid(salon_id)) {
      return res.status(400).json({ error: "Invalid salon_id format" });
    }

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const salon = await Salon.findById(salon_id);
    if (!salon) {
      return res.status(404).json({ error: "Salon not found" });
    }

    if (!services || !date || !time || !payment) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const appointment = new Appointment({
      user_id,
      salon_id,
      services,
      date,
      time,
      payment
    });

    await appointment.save();

    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (err) {
    res.status(500).json({ message: "Error booking appointment", error: err.message });
  }
};
