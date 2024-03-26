import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ padding: 20 ,marginTop:-40}}>
            <View style={{ padding: 10, borderTopWidth: 0.5 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                    Hotel Description
                </Text>
                <Text style={{ color: '#444444' }}>
                    218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
                </Text>
            </View>
        </View>
    );
}
