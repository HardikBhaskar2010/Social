import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import MotivatingScreen from './screens/MotivateScreen';
import HelpScreen from './screens/HelpScreen';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Motivate" component={MotivatingScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
