import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Ex011() {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, { flex: 2, backgroundColor: '#4A90E2' }]}></View>
      <View style={[styles.subContainer, { flex: 2, backgroundColor: '#50E3C2' }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
  },
  subContainer: {
    flex: 2,
  },
});
