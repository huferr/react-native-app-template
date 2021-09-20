import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// pages

import Home from '../pages/Dashboard/Home/home.screen';
import Settings from '../pages/Settings/settings.screen';
import Profile from '../pages/Dashboard/Profile/profile.screen';
import HomeIcon from '../assets/icons/home';
import colors from '../styles/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.grayLight,
        headerShown: false,
        tabBarItemStyle: {
          // paddingVertical: isIos() ? 30 : 0,
        },
        tabBarStyle: {
          // height: !isIos() ? 65 : 61 + bottomSpace,
          borderTopColor: 'transparent',
          shadowColor: 'rgba(0,0,0,0.05)',
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 15,
          elevation: 25,
          shadowOpacity: 25,
          opacity: 25,
        },
        lazy: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={
          {
            // tabBarIcon:,
          }
        }
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={
          {
            // tabBarIcon:,
          }
        }
      />
    </Tab.Navigator>
  );
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
