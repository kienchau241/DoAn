import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function PayMent({navigation}){
    return(
        <SafeAreaView style = {{marginTop: 24}}>
            <Text 
            onPress={() => navigation.navigate('Home')} >
            Pay screen</Text>
        </SafeAreaView>
    );
};

