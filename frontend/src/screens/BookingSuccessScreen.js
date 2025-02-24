

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckCircleIcon } from "react-native-heroicons/solid";

const BookingSuccessScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      {/* ✅ Success Checkmark */}
      <CheckCircleIcon size={80} color="green" />

      {/* 🎉 Success Message */}
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333", marginTop: 10 }}>
        Appointment Booked!
      </Text>

      {/* 🔙 Close Button (Can be used to dismiss modal or go back) */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "green",
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
        onPress={() => console.log("Close Pressed")}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingSuccessScreen;

