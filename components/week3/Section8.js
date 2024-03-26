import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ padding: 10, marginTop: -10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 0.4, borderBottomWidth: 1 }}>
            <View style={{marginLeft: 30, justifyContent: 'flex-end'}}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>price</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5, color: "#FF4500" }}>$399.99</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>AVG/Night</Text>
            </View>
            <View style={{ backgroundColor: 'red', padding: 5, borderRadius: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold',color: 'white', fontWeight: 'bold' }}>Book Now</Text>
            </View>
        </View>
    );
}
