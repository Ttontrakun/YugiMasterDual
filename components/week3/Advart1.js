import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Advart1() {
    // สร้าง state เพื่อเก็บจำนวน comments และ likes
    const [comments, setComments] = React.useState(100); // 
    const [likes, setLikes] = React.useState(500); // 

    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 ,}} source={require("../../assets/week3/Home.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>YUGIMASTERDUAL OFFICIAL</Text>
                    <Text style={{ color: "gray" }}>5 hours ago | 100k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 ,borderRadius : 20 }} source={require("../../assets/week3/Tour1.png")} />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding: 10 }}>
                <Text style={{ color: '#444444' }}>KONAMI has also confirmed details on the World Championship Qualifier (WCQ) tournaments cup in the Americas, Europe and Oceania. </Text>
                {/* view ก้อนที่ 4 */}
                <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: 10 }}>
                    {/* สลับตำแหน่ง icon comment และ icon like */}
                    <TouchableOpacity onPress={() => setComments(prev => prev + 1)}>
                        <FontAwesome name="comment" size={24} color="gray" />
                        <Text style={{ color: 'gray', marginLeft: 5 }}>{comments}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLikes(prev => prev + 1)} style={{ marginLeft: 10 }}>
                        <FontAwesome name="thumbs-up" size={24} color="gray" />
                        <Text style={{ color: 'gray', marginLeft: 5 }}>{likes}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
