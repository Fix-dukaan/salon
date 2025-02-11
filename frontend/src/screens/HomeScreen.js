import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/img1.jpg')} 
        style={styles.image}
      />
      <Text style={styles.foodText}>40k+ Gourmet Delights</Text>
      <Text style={styles.text}>
        Unleash Your Style, Elevate Your{'\n'}
        <Text style={styles.centerText}>Confidence!</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Next')}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 200,
    marginBottom: 100
  },
  foodText: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3c444c',
    textAlign: "center", // Ensures entire block is centered
    marginBottom: 50,
  },
  centerText: {
    fontSize: 26, 
    fontWeight: "bold",
    color: "#f96163", // Highlighted color for "Confidence!"
    textAlign: "center", // Center-align "Confidence!"
  },
  button: {
    backgroundColor: '#f96163',
    borderRadius: 18,
    paddingVertical: 18,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18, 
    color: '#fff',
    fontWeight: '700'
  }
});

export default HomeScreen;
