import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
  const [counter, setCounter] = useState(0);

  const onPressHeart = () => {
    setCounter(counter + 1 );
  };

  return (
    <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-around" }}>
      <TouchableOpacity onPress={onPressHeart}>
        <FontAwesome name="heart" size={30} color="orange" />
      </TouchableOpacity>
      <Text style={{ fontSize: 25 }}>{counter}</Text>
    </View>
  );
}

