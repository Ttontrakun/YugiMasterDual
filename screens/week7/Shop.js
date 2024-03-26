import React from 'react';
import { ScrollView, Text, View } from 'react-native';


import Card from '../../components/week3/Card';
import Card1 from '../../components/week3/Card1';

export default function Shop() {
    
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 10 }}>
                {<Text> SECRET PACKS</Text>}
                <Card />
                <Card1 />
            </View>
        </ScrollView >
    );
}
