import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Advart1 from '../week3/Advart1';
import Advart2 from '../week3/Advart2';
import Advart3 from '../week3/Advart3';
export default function Advert() {
    
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 10 }}>
                <Advart1 />
                <Advart2/>
                <Advart3/>
              
            </View>
        </ScrollView >
    );
}
