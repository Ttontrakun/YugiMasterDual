
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/week6/Home';
import Advert from '../screens/week3/Advent';
const Stack = createStackNavigator();

export default function Tournament() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="Adverd"
                    component={Advert}
                    options={{ title: 'Avert' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


