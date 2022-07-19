import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function PayMent({navigation}){
    return(
        <SafeAreaView style = {{flex: 1}}>
            <Text 
            onPress={() => navigation.navigate('Home')} >
            Pay screen</Text>
        </SafeAreaView>
    );
};

