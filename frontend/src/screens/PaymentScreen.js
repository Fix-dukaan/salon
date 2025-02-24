import axios from "axios";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const PaymentScreen = ({ route, navigation }) =>{
    const salon = navigation.state.params?.salon;
 const {totalPrice}=salon;

    

  const [orderId, setOrderId] = useState("");

  // ✅ Step 1: Create Order (Backend)
  const createOrder = async () => {
    try {
        const response = await axios.post("http://192.168.1.3:5000/api/payments/checkout", {
            amount: totalPrice,
        });
        //replace the 192.168.1.3 with the ipv4 address of your machine

        console.log("Order Created:", response.data);
        const data = response.data;

        if (data && data.id) {
            const orderId = data.id; // Razorpay Order ID
            setOrderId(orderId);
            console.log("Opening Razorpay with Order ID:", orderId);
            openRazorpay(orderId);
        } else {
            Alert.alert("Error", "Invalid order response.");
        }
    } catch (error) {
        console.error("Order Error:", error);
        Alert.alert("Error", "Order creation failed.");
    }
};

  

//   // ✅ Step 2: Open Razorpay Checkout
const openRazorpay = async (orderId) => {
    if (!orderId) {
        console.error("Error: Order ID is missing");
        Alert.alert("Error", "Order ID not received");
        return;
    }

    var options = {
        key: process.ENV.KEY, 
        amount: totalPrice * 100, // Amount should be in paise (integer)
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, 
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#3399cc"
        }
    };

    console.log("Opening Razorpay with Options:", options);

    RazorpayCheckout.open(options)//This part will cause an error as:  Payment Failed: [TypeError: Cannot read property 'open' of null]
      .then((data) => {
        Alert.alert("Payment Successful", `Payment ID: ${data.razorpay_payment_id}`);
        console.log("Payment Success:", data);
        verifyPaymentOnServer(data.razorpay_payment_id, orderId, data.razorpay_signature);
      })
      .catch((error) => {
        console.log("Payment Failed:", error);
        Alert.alert("Payment Failed", error.description || "Something went wrong");
      });
};


  


  // ✅ Step 3: Verify Payment with Backend
  const verifyPaymentOnServer = async (paymentId, orderId,signature) => {
    try {
        //replace your ipv4 address in the post link below
        const response = await axios.post("http://192.168.1.3:5000/api/payments/verification", {
            razorpay_order_id: orderId,
            razorpay_payment_id: paymentId,
            razorpay_signature: signature,
            amount: totalPrice,
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });

      const result = await response.json();
      if (result.success) {
        Alert.alert("Success", "Payment Verified & Saved in Database");
        navigation.navigate("Success"); // Redirect after success
      } else {
        Alert.alert("Error", "Payment Verification Failed");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      Alert.alert("Error", "Server Verification Failed");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Pay ₹{totalPrice}</Text>
      <TouchableOpacity onPress={createOrder}
        style={{ backgroundColor: "#F37254", padding: 15, borderRadius: 10 }}
         // Start Payment Process
      >
        <Text style={{ color: "white", fontSize: 18 }}>Proceed to Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
