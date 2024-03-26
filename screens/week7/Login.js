import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Signup from '../../components/week3/Signup';


export default function Login() {
    
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Signup />
            </View>
        </ScrollView >
    );
}
