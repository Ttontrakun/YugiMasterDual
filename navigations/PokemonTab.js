import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


export default function PokemonTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: { fontSize: 16 },
            }}
        >
            <Tab.Screen
                name="FlashScreen"
                component={FlashScreen}
                options={{
                    tabBarLabel: 'The Branded',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bolt" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="FlameScreen"
                component={FlameScreen}
                options={{
                    tabBarLabel: 'Kashtira',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="fire" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="LeafScreen"
                component={LeafScreen}
                options={{
                    tabBarLabel: 'Diabellstar',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="leaf" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

function FlashScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{
                    uri: 'https://s3.duellinksmeta.com/cards/6265e6943ecc89b0e4f30172_w360.webp',
                }}
                style={{ width: '80%', height: 525 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}></Text>
        </View>
    );
}

function FlameScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{
                    uri: 'https://s3.duellinksmeta.com/cards/63290d97d4dd6c3fea9b6d96_w360.webp',
                }}
                style={{ width: '80%', height: 525 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}></Text>
        </View>
    );
}

function LeafScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{
                    uri: 'https://s3.duellinksmeta.com/cards/64a64f9a6cee34962d217003_w360.webp',
                }}
                style={{ width: '80%', height: 525 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}></Text>
        </View>
    );
}
