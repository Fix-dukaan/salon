import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import axios for HTTP requests
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing JWT token

const SigninScreen = ({ navigation }) => {
  const salon = navigation.state.params?.salon;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Basic validation to ensure fields are not empty
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password');
      return;
    }

    try {
      const response = await axios.post('http://192.178.27.27:5000/auth/login', { //your ipv4 address instead of 192.178.27.27
        email,
        password,
      });

      if (response.data.token) {
        // Save JWT token in AsyncStorage
        await AsyncStorage.setItem('token', response.data.token);

        // Navigate to SlotBooking screen
        navigation.navigate('SlotBooking',{salon});
      } else {
        // Handle case where no token is returned
        Alert.alert('Error', 'Failed to sign in');
      }
    } catch (error) {
      console.error('Sign In Error:', error);
      Alert.alert('Error', error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signinButton} onPress={handleSignIn}>
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A25B2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    fontSize: 16,
  },
  signinButton: {
    backgroundColor: '#8A25B2',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signinText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
  signupLink: {
    color: '#8A25B2',
    fontWeight: 'bold',
  },
});

export default SigninScreen;
