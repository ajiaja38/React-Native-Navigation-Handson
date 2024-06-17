/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screen/MainScreen';
import {ProfileScreen} from '../screen/ProfileScreen';
import SettingScreen from '../screen/SettingScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListScreen from '../screen/PaymentScreen';

const HomeStack = createNativeStackNavigator();
const ListStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="main"
        component={MainScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <HomeStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          animation: 'flip',
          animationDuration: 1000,
        }}
      />
    </HomeStack.Navigator>
  );
};

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </SettingStack.Navigator>
  );
};

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="list"
        component={ListScreen}
        options={{headerShown: false}}
      />
    </ListStack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderRadius: 40,
            height: 70,
            backgroundColor: 'white',
            margin: 12,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            position: 'absolute',
          },
          tabBarItemStyle: {
            padding: 12,
          },
          tabBarActiveTintColor: '#4B70F5',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={ListStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="settings-sharp" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
