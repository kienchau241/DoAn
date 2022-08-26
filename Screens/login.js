import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView, TextInput} from 'react-native';
import { Button, FlatList } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
import Footernav from '../Navigation/Footernav';
import HomePage from './home';

export default function Login({navigation}){
    return(
        <SafeAreaView>
            <View style = {[{backgroundColor: "#fff", paddingBottom: 20},styles.shadowEffect]}>
                <SafeAreaView >
                    <Text style = {[{marginTop: 50, paddingLeft: 20, fontSize: 24}]}>
                        Starbuck Rewards 
                    </Text>
                </SafeAreaView>
            </View>
            <View style = {{marginTop: 30}}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                />
            </View>
            <View>
                <Text style = {[styles.ForgotPass]}>Quên mật khẩu</Text>
            </View>
            
            <View style = {[styles.loginLine]}>
                <Text 
                style = {[styles.loginBtn, styles.shadowEffect]}
                >Đăng nhập</Text>
                <Text style = {[styles.resBtn, styles.shadowEffect]}>Đăng ký</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    shadowEffect:{
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }, 
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#2a8a15",
        borderWidth: 3
    },
    ForgotPass:{
       marginLeft: 15  ,
       marginTop: 20,
       textDecorationLine:'underline'
    },
    loginLine:{
        paddingLeft: 15,
        paddingRight: 20,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: "space-between"
    },
    loginBtn:{
        paddingVertical:10,
        paddingHorizontal: 15,
        backgroundColor: '#2a8a15',
        color: "white",
        borderRadius: 15
    },
    resBtn:{
        paddingVertical:10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 15

    },
})