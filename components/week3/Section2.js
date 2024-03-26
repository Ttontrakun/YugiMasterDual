import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Section2() {
    return (
        <View style ={{marginTop:-60,margin : 20 , padding : 10, borderWidth : 0.5, borderRadius : 20 ,backgroundColor:"white"}}>
            <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Hilton San Francisco</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>

                <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#444444', textAlign: 'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
            </View>
        </View>
    );
}
