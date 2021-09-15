import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// pages

import Home from '../pages/Dashboard/Home/home.screen';
import Settings from '../pages/Settings/settings.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  return;
};

const App: React.FC = () => (
  <Stack.Navigator
    initialRouteName="dashboard"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="settings" component={Settings} />
  </Stack.Navigator>
);

export default App;
