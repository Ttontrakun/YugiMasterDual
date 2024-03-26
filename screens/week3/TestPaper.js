import React from "react";
import { ScrollView } from "react-native";
import { Avatar, Card, Divider } from "react-native-paper";

export default function TestPaper() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
      <Card>
        <Card.Cover style={{ borderRadius: 0 }} source={require('../../assets/week3/trip-2.jpg')} />
        <Card.Title
          title="Hilton San Francisco"
          titleStyle={{ fontSize: 20, textAlign: 'center' }}
          subtitle="Facilities provided may range from a modest quality mattress in a small room to large suites"
          subtitleStyle={{ color: "grey" }}
        />
        <Card.Title
          title="Excellent"
          subtitle="see 801 reviews"
          left={(props) => <Avatar.Image size={40} />}
          subtitleStyle={{ color: "grey" }}
        />
      </Card>
      

      <Divider style={{ marginVertical: 10 }} />
    </ScrollView>
    
  );
}
