
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/week6/Home';
import Travel from '../screens/week3/Travel';
const Stack = createStackNavigator();

export default function TravelTab() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="Travel"
                    component={Travel}
                    options={{ title: 'Travel' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


