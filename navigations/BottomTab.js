import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/week6/Home';
import { FontAwesome } from "@expo/vector-icons";
import HomeStack from '../navigations/HomeStack';
import Shop from '../screens/week7/Shop';
import Login from '../screens/week7/Login';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "HOME PAGE",
          tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="shop"
        component={Shop}
        options={{
          tabBarLabel: "SECRET PACKS",
          tabBarIcon: ({ color, size }) => (<FontAwesome name="shopping-cart" color={color} size={size} />),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "ACCOUNT",
          tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
        }}
      />
      
    </Tab.Navigator>
  );
}
