import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Stores({navigation}){
    return(
        <SafeAreaView>
            <Text 
            onPress={() => navigation.navigate('Home')} >
            Stores screen</Text>
        </SafeAreaView>
    )
}