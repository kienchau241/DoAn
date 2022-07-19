import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Booking({navigation}){
    return(
        <SafeAreaView>
            <Text 
            onPress={() => navigation.navigate('Home')} >
            Book screen</Text>
        </SafeAreaView>
    )
}