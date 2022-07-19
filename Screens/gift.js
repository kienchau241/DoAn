import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Gift({navigation}){
    return(
        <SafeAreaView>
            <Text 
            onPress={() => navigation.navigate('Home')} >
            Gift screen</Text>
        </SafeAreaView>
    )
}