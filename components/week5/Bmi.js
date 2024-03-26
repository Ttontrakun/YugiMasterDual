import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [bmi, setBmi] = useState('0');
  const [description, setDescription] = useState('');

  console.log("STATE : ", weight, height, bmi);

  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = weight / ((height / 100) * (height / 100));
    setBmi(output.toFixed(2));

    let bmiDescription = "";
    if (output < 18.5) {
      bmiDescription = "Underweight ";
    } else if (output >= 18.5 && output <= 24.99) {
      bmiDescription = "Normal ";
    } else if (output >= 25 && output <= 29.99) {
      bmiDescription = "Overweight ";
    } else if (output >= 30 && output <= 34.99) {
      bmiDescription = "Obese ";
    } else if (output >= 35 && output <= 39.99) {
      bmiDescription = "Extermely Obase";
    } else {
      bmiDescription = "Morbidly Obese - take action!";
    }

    setDescription(bmiDescription);
  };

  return (
    <View>
      {/* Section 1 */}
      <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
        <Text style={{ fontSize: 20 }}>Weight(kg.)</Text>
        <TextInput value={weight} style={{ fontSize: 20 }} keyboardType="numeric" onChangeText={(newWeight) => setWeight(newWeight)} placeholder="Input your Weight... " />
      </View>

      {/* Section 2 */}
      <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
        <Text style={{ fontSize: 20 }}>Height(cm.)</Text>
        <TextInput value={height} style={{ fontSize: 20 }} keyboardType="numeric" onChangeText={(newHeight) => setHeight(newHeight)} placeholder="Input your Height...  " />
      </View>

      {/* Section 3 */}
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {/* Left */}
        <View style={{ flex: 1, backgroundColor: "white", marginRight: 10, height: 100, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>BMI: {bmi}</Text>
        </View>

        {/* Right */}
        <View style={{ flex: 1, backgroundColor: "white", marginRight: 10, height: 100, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>{description}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPressButton}>
        <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
          <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
