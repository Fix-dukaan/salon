import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'; // Import axios for making requests

const SignupScreen = ({ navigation }) => {
  const salon = navigation.state.params?.salon;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSignup = async () => {
    if (!name || !email || !password || !age || !gender) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://192.178.27.27:5000/auth/signup', {   //your ipv4 address instead of 192.168.29.27
        name,
        email,
        password,
        age,
        gender,
      });
      // If successful, navigate to the sign-in page
      if (response.status === 201) {
        Alert.alert('Success', 'User created successfully');
        navigation.navigate('Signin',{salon}); // Navigate to Sign-in page
      }
    } catch (error) {
      // Handle errors from the server (e.g., validation errors)
      const errorMessage = error.response?.data?.errors || 'Something went wrong';
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      

      

      <TouchableOpacity onPress={() => navigation.navigate('Signin',{salon})}>
        <Text style={styles.signinText}>
          Already have an account? <Text style={styles.signinLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8A2BE2',
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
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  signupButton: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  salonName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  salonDetails: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 5,
  },
  proceedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  proceedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signinText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
  signinLink: {
    color: '#8A25B2',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
