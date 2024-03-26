import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";  // เพิ่ม StyleSheet ด้วย
import MyIcon from "../week3/MyIcon";
import { useNavigation } from "@react-navigation/native";

export default function HomeIconMenu() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* View ก้อนที่ 1: Search Input */}
            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder="Search cards...?" />
            </View>

            {/* View ก้อนที่ 2: Icons */}
            <View style={styles.iconContainer}>
                <MyIcon title="TIER LIST" name="list-ol" size={30} color="orange" onPress={() => { navigation.navigate("Ex01"); }} />
                <MyIcon title="TOP CARD" name="star" size={30} color="orange" onPress={() => { navigation.navigate("PokemonTab"); }} />
                <MyIcon title="Tournament" name="flag-checkered" size={30} color="orange" onPress={() => { navigation.navigate("TravelTab"); }} />
                <MyIcon title="GUIDES" name="question-circle" size={30} color="orange" />
            </View>

            {/* View ก้อนที่ 3: More Icons */}
            <View style={styles.iconContainer}>
        
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: -35,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    searchContainer: {
        backgroundColor: '#eeeeee',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        fontSize: 20,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});
