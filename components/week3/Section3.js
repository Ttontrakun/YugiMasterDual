import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 ,marginTop:-40}}>
                <Text style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: '#FFA07A', textAlign: 'center', lineHeight: 50, fontSize: 18, color: 'white' }}>9.5</Text>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color:"#FFA07A"}}>Steve Garrett</Text>
                    <Text style={{ color: "gray" }}>5 hours ago | 100k views</Text>
                </View>
            </View>
        </View>
    );
}
