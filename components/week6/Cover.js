import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, } from "react-native";

export default function Cover() {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 2 }} source={require("../../assets/week3/Home.jpg")} />
        </View>
    );
}