import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NextScreen from './src/screens/NextScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import SlotBookingScreen from './src/screens/SlotBookingScreen';


const navigator=createStackNavigator({
  Home: HomeScreen,
  Next: NextScreen,
  Signup: SignupScreen,
  Signin: SigninScreen,
  SlotBooking: SlotBookingScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator);