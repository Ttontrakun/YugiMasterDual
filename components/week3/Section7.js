import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding: 20, marginTop: -40, flexDirection: 'row' }}>
            <View style={{ marginLeft: 10, justifyContent: 'flex-end' }}>
                <View style={{ padding: 10,  }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Room Type</Text>
                </View>
                <Image style={{ width: 100, height: 100, resizeMode: "cover", borderRadius: 10 }} source={require("../../assets/week3/room-8.jpg")} />
            </View>
            <View style={{ padding: 20, marginTop: -30, justifyContent: 'flex-end' }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#FF4500" }}>$399.99</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
