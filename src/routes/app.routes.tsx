import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// pages

import Home from '../pages/Dashboard/Home/home.screen';
import Settings from '../pages/Settings/settings.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="dashboard" component={Home} />
    <Stack.Screen name="settings" component={Settings} />
  </Stack.Navigator>
);

export default App;
