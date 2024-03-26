import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View, Image, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textContent: {
    fontSize: 15,
    marginBottom: 10
  },
  image: {
    width: 170,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center', // จัดให้ภาพอยู่ตรงกลางแนวนอน
    height: 300 // เพิ่มความสูงของ imageContainer
  },
  textOnImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    justifyContent: 'center', // จัดให้ข้อความและภาพอยู่ตรงกลางตามแนวนอน
    alignItems: 'center' // จัดให้ข้อความและภาพอยู่ตรงกลางตามแนวตั้ง
  },
  textOnImageContent: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  powerText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5
  }
});

function FlashScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textContent, { fontSize: 40 }]}>Tier 2</Text>
      <Text style={[styles.textContent, { fontSize: 15 }]}>Decks with power levels between 7 and 12.</Text>
      <View style={styles.imageContainer}>
        <ImageBackground source={require("../../assets/week3/la.webp")} style={styles.image}>
          <View style={styles.textOnImage}>
            <Text style={styles.textOnImageContent}>Labrynth</Text>
            <Text style={styles.powerText}>Power: 11</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={require("../../assets/week3/t1.webp")} style={styles.image}>
          <View style={styles.textOnImage}>
            <Text style={styles.textOnImageContent}>Tearlament</Text>
            <Text style={styles.powerText}>Power: 8</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default function Ex01() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <FlashScreen />
      <Button title="Next" onPress={() => navigation.navigate("Ex03")} />
      <StatusBar style="auto" />
    </View>
  );
}
