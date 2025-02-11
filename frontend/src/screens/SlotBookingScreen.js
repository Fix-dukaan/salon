import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';

const SlotBookingScreen = ({navigation }) => {
    const salon = navigation.getParam('salon');
    // Access the selected salon

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    setAvailableDates(salon.availableDates); // Assuming salon has an array of available dates
  }, [salon]);

  const handleBooking = () => {
    if (selectedDate && selectedService) {
      navigation.navigate('Payment', {
        salon: salon,
        date: selectedDate,
        service: selectedService,
      });
    } else {
      alert('Please select a date and service!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Slot at {salon.name}</Text>

      {/* Show available dates in a calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#f96163' },
        }}
        minDate={new Date().toISOString().split('T')[0]} // Only future dates
        monthFormat={'yyyy MM'}
      />

      {/* Select service */}
      <Text style={styles.label}>Select Service</Text>
      <Picker
        selectedValue={selectedService}
        onValueChange={(itemValue) => setSelectedService(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Service" value="" />
        {salon.services.map((service, index) => (
          <Picker.Item key={index} label={service} value={service} />
        ))}
      </Picker>

      {/* Proceed to payment */}
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f96163',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#f96163',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SlotBookingScreen;
