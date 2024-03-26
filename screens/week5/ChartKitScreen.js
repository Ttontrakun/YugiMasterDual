import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartKitScreen({ navigation }) {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2
            }
        ],
        legend: ["Rainy Days"]
    };

    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };

    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth - 20} // Adjust as needed
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical: 10,
                    borderRadius: 15
                }}
            />
        </View>
    );
}
