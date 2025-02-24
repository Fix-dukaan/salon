
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const SlotBookingScreen = ({ navigation }) => {
  const salon = navigation.getParam('salon');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedServices, setSelectedServices] = useState([]); // Stores selected services
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); // Stores total price

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const highlightedDates = {};
    salon.availableDates
      .filter((dateObj) => dateObj.date >= today)
      .forEach((dateObj) => {
        highlightedDates[dateObj.date] = {
          marked: true,
          dotColor: '#B9A5E2',
        };
      });
    setMarkedDates(highlightedDates);
  }, [salon]);

  useEffect(() => {
    if (selectedDate) {
      const dateObj = salon.availableDates.find((d) => d.date === selectedDate);
      setAvailableTimes(dateObj ? dateObj.availableTimes : []);
    }
  }, [selectedDate]);

  // Calculate total price when services are selected
  useEffect(() => {
    const total = selectedServices.reduce((sum, service) => {
      const serviceData = salon.services.find((s) => s.service_name === service);
      return sum + (serviceData ? serviceData.price : 0);
    }, 0);
    setTotalPrice(total);
  }, [selectedServices]);

  // Logout function
  const handleLogout = async () => {
    try {
      // Clear any saved authentication data (like token)
      await AsyncStorage.removeItem('userToken');  // Assuming you're using AsyncStorage to store a token

      // Navigate to the next screen (Login or NextScreen)
      navigation.navigate('Next');  // Replace 'NextScreen' with your actual screen name
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedServices.length > 0 && selectedTime) {
      navigation.navigate('Payment', {
        salon: salon,
        date: selectedDate,
        services: selectedServices,
        time: selectedTime,
        totalPrice: totalPrice, // Pass total price to payment
      });
    } else {
      alert('Please select a date, at least one service, and a time!');
    }
  };

  const toggleServiceSelection = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>✂ GlamourCut</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Book Slot at {salon.name}</Text>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => {
          if (markedDates[day.dateString]) {
            setSelectedDate(day.dateString);
          } else {
            alert('This date is not available!');
          }
        }}
        markedDates={{
          ...markedDates,
          [selectedDate]: { selected: true, selectedColor: '#B9A5E2' },
        }}
        minDate={today}
        monthFormat={'yyyy MM'}
      />

      {selectedDate && availableTimes.length > 0 && (
        <>
          <Text style={styles.label}>Available Time</Text>
          <View style={styles.timeContainer}>
            {availableTimes.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.selectedTime,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={styles.timeText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {/* Service Selection */}
      <Text style={styles.label}>Select Services</Text>
      {salon.services.map((service, index) => (
        <TouchableOpacity
          key={service.service_name} // Use unique service name for key
          style={[
            styles.serviceItem,
            selectedServices.includes(service.service_name) && styles.selectedService,
          ]}
          onPress={() => toggleServiceSelection(service.service_name)}
        >
          <Text style={styles.serviceText}>
            {service.service_name} - ₹{service.price}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Total Price */}
      <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>

      {/* Proceed Button */}
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
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginTop: 15,
  },
  logoutButton: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8A2BE2',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timeText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeSlot: {
    backgroundColor: '#EEE',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  selectedTime: {
    backgroundColor: '#B9A5E2',
  },
  serviceItem: {
    backgroundColor: '#EEE',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  selectedService: {
    backgroundColor: '#B9A5E2',
  },
  serviceText: {
    fontSize: 16,
    color: '#333',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#8A2BE2',
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
