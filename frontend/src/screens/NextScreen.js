import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

const SalonCard = ({ salon, navigation }) => {
  return (
    <View style={styles.card}>
      {/* Render the image (either dynamic or fallback) */}
      <Image
        source={salon.image ? { uri: salon.image } : require("../../assets/salon1.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.salonName}>{salon.name}</Text>
        <Text style={styles.address}>{salon.address}</Text>
        <Text style={styles.services}>Services:</Text>
        {salon.services.map((service, index) => (
          <Text key={index} style={styles.serviceText}>
            {service.service_name} - ${service.price}
          </Text>
        ))}
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
  const [salons, setSalons] = useState([]);  // State to hold salon data
  const [loading, setLoading] = useState(true);  // State to track loading status
  const [error, setError] = useState(null);  // State to track any errors

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch("http://192.178.27.27:5000/api/salons")  // //your ipv4 address instead of 192.178.27.27
      .then((response) => response.json())
      .then((data) => {
        
        const updatedSalons = data.map(salon => {
          
          if (!salon.image) {
           
            salon.image = null;  // This will trigger the fallback image in the <Image /> component
          }
          return salon;
        });

        setSalons(updatedSalons);  
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load salons");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading salons...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>✂ GlamourCut</Text>
      </View>
      <FlatList
        data={salons}
        keyExtractor={item => item.id?.toString() || item.name + Math.random().toString()}
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
    width: 90,
    height: 90,
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
    marginTop: 8,
  },
  serviceText: {
    fontSize: 14,
    color: "#444",
  },
  button: {
    backgroundColor: "#8A25B2",
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
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8A2BE2",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default SalonListScreen;
