import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ex04() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'row' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'powderblue' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'steelblue' }} />
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button title="Next" onPress={() => navigation.navigate("Ex05")} />
      </View>
    </View>
  );
}
