
const instance = require("../config/razorpayInstance"); // ✅ Avoids name conflict

const crypto = require("crypto");
const Appointment = require("../models/Appointment.js"); // Import Appointment model

exports.checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.send(order);
};

exports.paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", process.env.KEY_SECRET) // Use KEY_SECRET, not KEY_ID
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        try {
            // Find the appointment by ID and update payment details
            await Appointment.findByIdAndUpdate(
                userid,
                {
                    $set: {
                        "payment.amount": req.body.amount, // Amount from request
                        "payment.method": "Razorpay", // Hardcoded, or extract from req.body if available
                        "payment.status": "Paid", // Set status as Paid
                        "payment.transaction_id": razorpay_payment_id,
                    },
                },
                { new: true } // Returns the updated document
            );

            res.redirect(
                `http://192.168.1.3:3000/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } catch (error) {
            console.error("Error saving payment details:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(400).send("Failed to verify");
    }
};
