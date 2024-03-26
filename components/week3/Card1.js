import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function Card1() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection : "row" }}>
                <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2, borderRadius : 20 }} source={require("../../assets/week3/s2.webp")} />
            </View>
    
            {/* View ก้อนที่ 3 */}
            <View style={{ marginTop : 10 }}>
                <Text style={{ fontSize : 20 }}>Secret Pack: The First Heroes</Text>
            </View>
            {/* View ก้อนที่ 4 */}
            <View style={{ flexDirection : "row", justifyContent : "space-between", marginTop : 10  }}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                <View>
                    <Text style={{ fontSize : 16 , color : 'gray'}}>100 Reviews</Text>
                </View>
            </View>
            {/* View ก้อนที่ 5 */}
            <View style={{ marginTop : 10 }}>
                <Text  style={{ fontSize : 20 , color : 'red'}} >$125</Text>
            </View>
        </View>    
    );
}
