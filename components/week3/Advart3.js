import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Advart1() {
    // สร้าง state เพื่อเก็บจำนวน comments และ likes
    const [comments, setComments] = React.useState(1); // เริ่มต้นที่ 1
    const [likes, setLikes] = React.useState(1); // เริ่มต้นที่ 1

    return (
        <View style={{ padding: 1 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 ,}} source={require("../../assets/week3/ash.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Urara</Text>
                    <Text style={{ color: "gray" }}>10 hours ago | 1k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 ,borderRadius : 20 }} source={require("../../assets/week3/pack1.webp")} />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding: 10 }}>
                <Text style={{ color: '#444444' }}>New Pack...WoW. </Text>
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
