import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import {BookingSvg, HomeSvg, ProfileSvg, SavedSvg} from '../assets/svg';
import {ScreensName} from '../constants';
import Booking from '../screens/Booking';
import Profile from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ScreensName.HOME}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name={ScreensName.HOME}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
          }}
        />
        <Tab.Screen
          name={ScreensName.SAVED}
          component={Saved}
          options={{
            tabBarLabel: 'Saved',
            headerShown: false,
            tabBarIcon: ({focused}) => <SavedSvg focused={focused} />,
          }}
        />
        <Tab.Screen
          name={ScreensName.BOOKINGS}
          component={Booking}
          options={{
            tabBarLabel: 'Booking',
            headerShown: false,
            tabBarIcon: ({focused}) => <BookingSvg focused={focused} />,
          }}
        />
        <Tab.Screen
          name={ScreensName.PROFILE}
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused}) => <ProfileSvg focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
