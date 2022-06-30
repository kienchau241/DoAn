import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
    return (
    <View style = {headerStyle.container}>
        <Text style = {headerStyle.txt}>
            Header
        </Text>
    </View>
    );
}

const headerStyle = StyleSheet.create({
    container : {
        width: "100%",
        height:"12%",
        backgroundColor:"red"
    },
    txt: {
        padding : 20
    }
}); 

