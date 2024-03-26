import React from 'react';
import { View, Button } from 'react-native';

export default function Ex06({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'powderblue' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'steelblue' }} />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button title="Next" onPress={() => navigation.navigate("Ex07")} />
      </View>
    </View>
  );
}
