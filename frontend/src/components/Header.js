
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import SignupScreen from '../screens/SignupScreen';


const Header = ({navigation}) => {
    
  return (
    <View style={styles.container}>
      {/* Header Title & Icons */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>🍜 FoodieExpress</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={28} color="#f96163" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Signup')}>
            <Ionicons name="person-circle-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for food..."
            style={styles.searchInput}
          />
          <TouchableOpacity>
            <FontAwesome name="search" size={20} color="#f96163" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    // elevation: 4,
    
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:10
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchWrapper: {
    marginTop: 10,
  },
  searchLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",  // Increased width to full screen
    paddingVertical: 5,  // Added vertical padding for better appearance
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginLeft: 10,
  },
});

export default Header;
