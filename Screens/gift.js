import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import { Button, FlatList } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';

export default function Gift({navigation}){
    return(
        <SafeAreaView>
            <View style = {[{backgroundColor: "#fff", paddingBottom: 20},style.shadowEffect]}>
                <SafeAreaView >
                    <Text style = {[{marginTop: 50, paddingLeft: 20, fontSize: 24}]}>
                        Quà tặng
                    </Text>
                </SafeAreaView>
            </View>
            <ScrollView>

                <View style = {[style.cardsHorizon]}>
                    <Text style = {[style.subText]}>Feature</Text>
                    <ScrollView horizontal style = {{}}>
                    <View style = {{padding: 10}}>
                            <Image style = {[style.bigImage]} source={require('../assets/image/SbCard1.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image style = {[style.bigImage]} source={require('../assets/image/SbCard2.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image style = {[style.bigImage]} source={require('../assets/image/SbCard3.png')}/>
                        </View>               
                    </ScrollView>
                </View>
                <View style = {[style.cardsHorizon]}>
                    <Text style = {[style.subText]}>Anytime</Text>
                    <ScrollView horizontal>
                    <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard4.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard5.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard6.png')}/>
                        </View>               
                    </ScrollView>
                </View>
                <View style = {[style.cardsHorizon]}>
                    <Text style = {[style.subText]}>Birthday</Text>
                    <ScrollView horizontal>
                    <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard4.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard5.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard6.png')}/>
                        </View>               
                    </ScrollView>
                </View>
                <View style = {[style.cardsHorizon, {marginBottom: 100}]}>
                    <Text style = {[style.subText]}>Congrats</Text>
                    <ScrollView horizontal>
                    <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard4.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard5.png')}/>
                        </View> 
                        <View style = {{padding: 10}}>
                            <Image source={require('../assets/image/SbCard6.png')}/>
                        </View>               
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    subText:{
        color: "#8e908c",
        paddingLeft : 20,
        paddingTop: 10,
        fontSize: 18
    },
    bigImage:{
        width: 300,
        height: 200
    },
    cardsHorizon:{
        borderBottomWidth:StyleSheet.hairlineWidth, 
        borderBottomColor:'#D3DADA', 
        paddingBottom: 15
    },
    shadowEffect:{
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }

});
