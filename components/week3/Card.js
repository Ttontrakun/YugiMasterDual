import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding : 10  }}>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/s1.webp")} />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Secret Pack: Alba Abyss</Text>
                <Text style={{ color : '#444444' }}>The set Alba Abyss is a Secret Pack, released on March 20th, 2024</Text>
            </View>
        </View>    
    );
}
