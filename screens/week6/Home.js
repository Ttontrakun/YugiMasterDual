import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Cover from "../../components/week6/Cover";
import HomeIconMenu from "../../components/week6/HomeIconMenu";
import Advart from "../../components/week6/Advent";

export default function Home() {
    return (
        
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Cover />
                <HomeIconMenu />
                <Advart/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
