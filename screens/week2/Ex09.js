import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
    return (
        <View style={{ flex: 1, justifyContent: 'space-around'}}>
            <View style={{
            
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'powderblue'
                }} />
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'powderblue'
                }} />
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'powderblue'
                }} />
            </View>
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'skyblue'
                }} />
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'skyblue'
                }} />
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'skyblue'
                }} />
            </View>
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }}>
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'steelblue'
                }} />
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'steelblue'
                }} />
                <View style={{
                    width: 100, height: 100,
                    backgroundColor: 'steelblue'
                }} />
            </View>
        </View>
    );
}
