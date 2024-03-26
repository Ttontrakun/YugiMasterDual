import React from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Section1() {
    return (
        <View style={{ padding: 1 }}>
            <View style={{ flexDirection: "row" , maginTop:-50}}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
        </View>
    );
}
