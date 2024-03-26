import React from 'react';
import { View, Button } from 'react-native';

export default function Ex05({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'powderblue' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'steelblue' }} />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button title="Next" onPress={() => navigation.navigate("Ex06")} />
      </View>
    </View>
  );
}
