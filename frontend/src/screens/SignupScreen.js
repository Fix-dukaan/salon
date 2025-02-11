
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Import Picker for Gender selection

// const SignupScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your age"
//         keyboardType="numeric"
//         value={age}
//         onChangeText={setAge}
//       />

//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={gender}
//           onValueChange={(itemValue) => setGender(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Select Gender" value="" />
//           <Picker.Item label="Male" value="male" />
//           <Picker.Item label="Female" value="female" />
//           <Picker.Item label="Other" value="other" />
//         </Picker>
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
//         <Text style={styles.signinText}>
//           Already have an account? <Text style={styles.signinLink}>Sign in</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // White background
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#f96163',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   pickerContainer: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 15,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
//   signupButton: {
//     backgroundColor: '#f96163',
//     paddingVertical: 12,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signupText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   signinText: {
//     marginTop: 15,
//     fontSize: 16,
//     color: '#666',
//   },
//   signinLink: {
//     color: '#f96163',
//     fontWeight: 'bold',
//   },
// });

// export default SignupScreen;

// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const SignupScreen = ({ navigation }) => {
//   // Access the selected salon from route.params
  
//   const salon = navigation.state.params?.salon
 

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>

//       {/* Display the salon details */}
//       <Text style={styles.salonName}>Salon: {salon.name}</Text>
//       <Text style={styles.salonDetails}>Address: {salon.address}</Text>
//       <Text style={styles.salonDetails}>Services: {salon.services}</Text>

//       <Button
//         title="Proceed to Slot Booking"
//         onPress={() => navigation.navigate('SlotBooking', { salon: salon })}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#f96163',
//   },
//   salonName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   salonDetails: {
//     fontSize: 16,
//     color: '#666',
//     marginVertical: 5,
//   },
// });

// export default SignupScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const SignupScreen = ({ navigation }) => {
//   const salon = navigation.state.params?.salon;

//   // State variables for input fields
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>

//       {/* Input Fields */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your age"
//         value={age}
//         onChangeText={setAge}
//         keyboardType="numeric"
//       />

//       <Picker
//         selectedValue={gender}
//         style={styles.input}
//         onValueChange={(itemValue) => setGender(itemValue)}
//       >
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       {/* Salon Details
//       <Text style={styles.salonName}>Salon: {salon.name}</Text>
//       <Text style={styles.salonDetails}>Address: {salon.address}</Text>
//       <Text style={styles.salonDetails}>Services: {salon.services}</Text> */}

//       <Button
//         title="Proceed to Slot Booking"
//         onPress={() => navigation.navigate('SlotBooking', { salon: salon })}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#f96163',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   salonName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 10,
//   },
//   salonDetails: {
//     fontSize: 16,
//     color: '#666',
//     marginVertical: 5,
//   },
// });

// export default SignupScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SignupScreen = ({ navigation }) => {
  const salon = navigation.state.params?.salon;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
         <Text style={styles.signinText}>
          Already have an account? <Text style={styles.signinLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      

      {/* <Text style={styles.salonName}>Salon: {salon.name}</Text>
      <Text style={styles.salonDetails}>Address: {salon.address}</Text>
      <Text style={styles.salonDetails}>Services: {salon.services}</Text> */}

      <TouchableOpacity 
        style={styles.proceedButton}
        onPress={() => navigation.navigate('SlotBooking', { salon: salon })}
      >
        <Text style={styles.proceedText}>Proceed to Slot Booking</Text>
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
    color: '#f96163',
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
    backgroundColor: '#f96163',
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
     }
});

export default SignupScreen;
