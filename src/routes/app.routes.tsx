import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// assets
import HomeIcon from '../assets/icons/home';
import ProfileIcon from '../assets/icons/profile';
import InformationIcon from '../assets/icons/information';

// pages
import Home from '../pages/Dashboard/Home/home.screen';
import informations from '../pages/Informations/informations.screen';
import Profile from '../pages/Dashboard/Profile/profile.screen';

// helpers
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
        component={informations}
        options={{
          tabBarIcon: ({color}) => <InformationIcon fill={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon fill={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => (
  <Stack.Navigator
    initialRouteName="dashboard"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="informations" component={informations} />
  </Stack.Navigator>
);

export default App;
