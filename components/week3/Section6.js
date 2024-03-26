import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Section6() {
    return (
        <View style={{ padding: 20, marginTop: -30 }}>
            <View style={{ padding: 10,  borderBottomWidth: 0.5 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                    Location
                </Text>
                <Text style={{ color: '#444444' }}>
                    218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
                </Text>
            </View>

            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: "row", marginTop: -10}}>
                    <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }} source={require("../../assets/week3/map.jpg")} />
                </View>
            </View>
        </View>
    );
}
