import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-web';
// import icon
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
// Image 
import sbReward from "./assets/SbReward.png";
export default function App() {
    return (
    <View>
        {/* ------------------*/}
        {/*Welcome*/}
        <View style = {headerStyle.container}>
            <Text style = {[headerStyle.txt, common.pdleft20]}>
                Xin chào, Kien
            </Text>
            <View style ={[headerStyle.headerBtn,common.pdleft20]}>
                <View style = {{flexDirection:'row'}}>
                    <AntDesign name="user" size={18} color="black" />
                    <Text style ={{paddingRight: 16}}>
                        Tài khoản
                    </Text>
                    <AntDesign name="mail" size={18} color="black" paddingLeft={10}/>
                    <Text style ={{paddingLeft: 5}}>
                        Hộp thư
                    </Text>
                </View>
                <View style = {[common.pdright20]}>
                    <AntDesign name="setting" size={18} color="black" />
                </View>
            </View>
        </View>
        {/* ------------------*/}
        {/* Reward star*/}
        <View style = {body.bodyModule}>
            <View style={[{ flexDirection: 'row', alignItems: 'flex-start' },]}>
                <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA'}]}>STARBUCK REWARD</Text>
                <Text style={{ fontSize: 12, lineHeight: 18, color :'#9DAAAA' }}>TM</Text>
            </View>
            <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{flexDirection : 'row'}}>
                    <Text style ={[common.pdleft20,common.whiteColor, {fontSize:30, lineHeight: 18}]}>0</Text>
                    <Text style = {{color :'#006341',fontSize:20,}}>/100</Text>
                </View>
                <Text style ={[common.pdright20, common.whiteColor, {lineHeight: 30, fontSize: 18}]}>100 
                <Entypo name="star" size={12} color="#006341" lineHeight= {10} />
                để lên thẻ vàng</Text>
            </View>
            <View style = {{borderColor : '#fff', borderRadius : 56, borderWidth: 1, width : '40%' , marginTop: 12, marginBottom:12, marginLeft: 20, paddingLeft: 6, paddingRight: 6}}>
                <Text style = {[common.whiteColor,{padding: 4 }]}>
                    Chi tiết quà thưởng
                </Text>
            </View>
        </View>
        {/* New feed*/}
        <View style = {[body.bodyModule, {backgroundColor: '#000'}]}>
            <View style={[{ flexDirection: 'row', alignItems: 'flex-start' },]}>
                <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA'}]}>QUYỀN LỢI KHÁCH HÀNG</Text>
            </View>

            <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style ={[common.whiteColor,common.pdleft20,{lineHeight: 30, fontSize: 18}]}>Tích lũy ngôi sao với</Text>
            </View>
            <View style = {{alignItems:"center"}}>
                <Image source={sbReward} style = {[{width: "100%", height : 50, resizeMode: "center"}]}/>
            </View>
            
            <View style = {[common.moreBtn]}>
                <Text style = {[common.whiteColor]}>
                    Tìm hiểu thêm
                </Text>
            </View>
            
        </View>
    </View>
    
    );
}

const common = StyleSheet.create({
    moreBtn:{
        backgroundColor: '#2a8a15',
        borderColor : '#fff',
        borderRadius : 56,
        maxWidth: "30%",
        marginTop: 12,
        marginBottom:12,
        marginLeft: 20,
        padding: 6
    },
    whiteColor:{
        color:"#fff"
    },
    pdleft20:{
        paddingLeft: 20
    },
    pdright20:{
        paddingRight:20
    },
    mgBot8 :{
        marginBottom:8
    }
})

const headerStyle = StyleSheet.create({
    container : {
        width: "100%",
        backgroundColor:"#fff",
        paddingBottom: 10
    },
    txt: {
        paddingTop: 24,
        fontSize: 24
    },
    headerBtn:{
        flexDirection: 'row',
        paddingTop: 32,
        justifyContent: 'space-between'
    },
    headerBtnTxt :{
        justifyContent: 'space-between',
    }
}); 

const body= StyleSheet.create({
    bodyModule:{
        width:'100%',
        backgroundColor: '#252523',
        marginBottom:8,
        paddingTop: 12
    }
}); 

