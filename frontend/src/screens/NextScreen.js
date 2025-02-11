

// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import SignupScreen from "./SignupScreen";

// const salons = [
//   {
//     id: "1",
//     name: "Chic Hair Studio",
//     address: "123 Fashion Ave, New York, NY",
//     services: "Haircuts, Coloring, Styling",
//     image: require("../../assets/img1.jpg"), 
//   },
//   {
//     id: "2",
//     name: "The Vintage Salon",
//     address: "456 Retro Rd, Brooklyn, NY",
//     services: "Haircuts, Extensions, Perms",
//     image: require("../../assets/img1.jpg"), 
//   },
//   {
//     id: "3",
//     name: "Luxury Locks",
//     address: "789 Glamour St, Manhattan, NY",
//     services: "Haircuts, Treatments, Blowouts",
//     image: require("../../assets/img1.jpg"), 
//   },
//   {
//     id: "4",
//     name: "Luxury Locks",
//     address: "789 Glamour St, Manhattan, NY",
//     services: "Haircuts, Treatments, Blowouts",
//     image: require("../../assets/img1.jpg"), 
//   },
//   {
//     id: "5",
//     name: "Luxury Locks",
//     address: "789 Glamour St, Manhattan, NY",
//     services: "Haircuts, Treatments, Blowouts",
//     image: require("../../assets/img1.jpg"), 
//   },
// ];

// const SalonCard = ({ salon,navigation }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={salon.image} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.salonName}>{salon.name}</Text>
//         <Text style={styles.address}>{salon.address}</Text>
//         <Text style={styles.services}>Services: {salon.services}</Text>
//         <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signup')}>
//           <Text style={styles.buttonText}>Book Now</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const SalonListScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>
//       <Ionicons name="cut" size={24} color="#f96163" />
//         <Text style={{ color: "#f96163", fontWeight: "bold" }}>GlamourCut</Text>{" "}
        
//       </Text>
//       <FlatList
//         data={salons}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <SalonCard salon={item} navigation={navigation} />}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//     marginTop: 40
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     elevation: 3,
//     marginBottom: 15,
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 10,
//     marginRight: 15,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   salonName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   address: {
//     fontSize: 14,
//     color: "#666",
//     marginVertical: 5,
//   },
//   services: {
//     fontSize: 14,
//     color: "#777",
//   },
//   button: {
//     backgroundColor: "#f96163",
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginTop: 8,
//     alignItems: "center",
//     width: 100,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
// });

// export default SalonListScreen;
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const salons = [
  {
    id: "1",
    name: "Chic Hair Studio",
    address: "123 Fashion Ave, New York, NY",
    services: ["Haircuts", "Coloring", "Styling"],
    availableDates: ["2025-02-12", "2025-02-14", "2025-02-16"],
    image: require("../../assets/img1.jpg"), // Replace with your image path
  },
  {
    id: "2",
    name: "The Vintage Salon",
    address: "456 Retro Rd, Brooklyn, NY",
    services: ["Haircuts", "Extensions", "Perms"],
    availableDates: ["2025-02-13", "2025-02-15", "2025-02-17"],
    image: require("../../assets/img1.jpg"), // Replace with your image path
  },
  {
    id: "3",
    name: "Luxury Locks",
    address: "789 Glamour St, Manhattan, NY",
    services: ["Haircuts", "Treatments", "Blowouts"],
    availableDates: ["2025-02-11", "2025-02-14", "2025-02-18"],
    image: require("../../assets/img1.jpg"), // Replace with your image path
  },
  {
    id: "4",
    name: "Glamour Cuts",
    address: "101 Beauty Blvd, Brooklyn, NY",
    services: ["Haircuts", "Facials", "Manicures"],
    availableDates: ["2025-02-15", "2025-02-16", "2025-02-18"],
    image: require("../../assets/img1.jpg"), // Replace with your image path
  },
  {
    id: "5",
    name: "Salon Serenity",
    address: "202 Serenity St, Manhattan, NY",
    services: ["Pedicure", "Haircut", "Facial"],
    availableDates: ["2025-02-12", "2025-02-14", "2025-02-17"],
    image: require("../../assets/img1.jpg"), // Replace with your image path
  },
];

const SalonCard = ({ salon, navigation }) => {
  return (
    <View style={styles.card}>
      <Image source={salon.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.salonName}>{salon.name}</Text>
        <Text style={styles.address}>{salon.address}</Text>
        <Text style={styles.services}>Services: {salon.services.join(", ")}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signup", { salon: salon })}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SalonListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Ionicons name="cut" size={24} color="#f96163" />
        <Text style={{ color: "#f96163", fontWeight: "bold" }}>GlamourCut</Text>
      </Text>
      <FlatList
        data={salons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SalonCard salon={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  salonName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  services: {
    fontSize: 14,
    color: "#777",
  },
  button: {
    backgroundColor: "#f96163",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
    alignItems: "center",
    width: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SalonListScreen;
