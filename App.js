import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import { Button } from 'react-native-web';
// import icon
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
// Image 
import sbReward from "./assets/image/SbReward.png";

export default function App() {
    return (
    <SafeAreaView>
        {/* ------------------*/}
        {/*Welcome*/}
        <SafeAreaView style = {[headerStyle.container, {marginTop: 14}]}>
            <Text style = {[headerStyle.txt, common.pdleft20]}>
                Xin chào, Kien
            </Text>
            <SafeAreaView style ={[headerStyle.headerBtn,common.pdleft20]}>
                <SafeAreaView style = {{flexDirection:'row'}}>
                    <AntDesign name="user" size={18} color="black" />
                    <Text style ={{paddingRight: 16}}>
                        Tài khoản
                    </Text>
                    <AntDesign name="mail" size={18} color="black" paddingLeft={10}/>
                    <Text style ={{paddingLeft: 5}}>
                        Hộp thư
                    </Text>
                </SafeAreaView>
                <SafeAreaView style = {[common.pdright20]}>
                    <AntDesign name="setting" size={18} color="black" />
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
        {/* ------------------*/}
        {/* Reward star*/}
        <SafeAreaView style = {[body.bodyModule, common.pdTop10]}>
            <SafeAreaView style={[{ flexDirection: 'row', alignItems: 'flex-start' },]}>
                <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA'}]}>STARBUCK REWARD</Text>
                <Text style={{ fontSize: 12, lineHeight: 18, color :'#9DAAAA' }}>TM</Text>
            </SafeAreaView>
            <SafeAreaView style = {{flexDirection:"row", justifyContent:"space-between"}}>
                <SafeAreaView style={{flexDirection : 'row'}}>
                    <Text style ={[common.pdleft20,common.whiteColor, {fontSize:30, lineHeight: 30}]}>0</Text>
                    <Text style = {{color :'#006341',fontSize:20,}}>/100
                    <Entypo name="star" size={12} color="#006341" lineHeight= {10} />
                    </Text>
                </SafeAreaView>
                <Text style ={[common.pdright20, common.whiteColor, {lineHeight: 30, fontSize: 18}]}>100 
                <Entypo name="star" size={12} color="#006341" lineHeight= {10} />
                để lên thẻ vàng</Text>
            </SafeAreaView>
            <SafeAreaView style = {{borderColor : '#fff', borderRadius : 56, borderWidth: 1,maxWidth :"50%", marginTop: 12, marginBottom:12, marginLeft: 20, paddingLeft: 6, paddingRight: 6}}>
                <Text style = {[common.whiteColor,{padding: 4, fontSize: 18}]}>
                    Chi tiết quà thưởng
                </Text>
            </SafeAreaView>
        </SafeAreaView>
        {/* New feed*/}
        <SafeAreaView style = {[[body.bodyModule, common.pdTop10], {backgroundColor: '#000'}]}>
            <View style={[{ flexDirection: 'row', alignItems: 'flex-start' },]}>
                <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA'}]}>QUYỀN LỢI KHÁCH HÀNG</Text>
            </View>

            <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style ={[common.whiteColor,common.pdleft20,{lineHeight: 30, fontSize: 24}]}>Tích lũy ngôi sao với</Text>
            </View>
            <View style = {{alignItems:"center"}}>
                <Image source={sbReward} style = {[common.img]}/>
            </View>
            
            <View style = {[common.moreBtn, {maxWidth: "35%"}]}>
                <Text style = {[common.whiteColor,{fontSize: 18}]}>
                    Tìm hiểu thêm
                </Text>
            </View>
        </SafeAreaView>
        {/* Feeds */}
        <SafeAreaView style = {[[body.bodyModule]]}>
            <ImageBackground source={require('./assets/image/Feed1.jpg')} style = {{flex: 1, resizeMode: 'cover', justifyContent:"center"}}>

                <View style={[{ flexDirection: 'row', alignItems: 'flex-start', marginBottom:24},]}>
                    <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA', marginTop:10}]}>MÓN MỚI</Text>
                </View>

                {/* <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style ={[common.whiteColor,common.pdleft20,{lineHeight: 30, fontSize: 24}]}>Năng lượng mùa Hè</Text>
                </View> */}
                <View style = {[common.moreBtnWhite]}>
                    <Text style = {[{fontSize: 18, color:"#333"}]}>
                        Tìm hiểu thêm
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
        {/*feed 2*/}
        <SafeAreaView style = {[[body.bodyModule]]}>
            <ImageBackground source={require('./assets/image/Feed1.jpg')} style = {{flex: 1, resizeMode: 'cover', justifyContent:"center"}}>

                <View style={[{ flexDirection: 'row', alignItems: 'flex-start', marginBottom:24},]}>
                    <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA', marginTop:10}]}>MÓN MỚI</Text>
                </View>
                <View style = {[common.moreBtnWhite]}>
                    <Text style = {[{fontSize: 18, color:"#333"}]}>
                        Tìm hiểu thêm
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
        {/* Order*/}
        <SafeAreaView style ={{flexDirection: 'row', marginBottom: 8}}>
            <View style = {[common.width50]}>
                <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA'}]}>ĐẶT MÓN QUA ỨNG DỤNG</Text>
                <Text style={[common.pdleft20,{fontSize:24, marginBottom: 12}]}>Nhanh chóng, tiện lợi</Text>
                <View style = {[common.moreBtn, {width: 135}]}>
                    <Text style = {[common.whiteColor,{fontSize: 18}]}>
                        Đặt món ngay
                    </Text>
                </View>
            </View>
            <ImageBackground source={require('./assets/image/AppOrder.jpg')} style = {[common.width50,{flex: 1,resizeMode: 'contain', justifyContent:"center", width: '100%'}]}>

            </ImageBackground>
        </SafeAreaView>

        {/* Order Below*/}
        <SafeAreaView style ={{flexDirection: 'row', marginBottom: 8}}>
            <View style = {[common.width50]}>
                <Text style ={[common.pdleft20, common.mgBot8,{lineHeight: 30, fontSize:14, color :'#9DAAAA'}]}>TÍNH NĂNG MỚI CỦA EGIFT</Text>
                <Text style={[common.pdleft20,{fontSize:24, marginBottom: 12}]}>Gửi tặng yêu thương</Text>
                <View style = {[common.moreBtn, {width: 100}]}>
                    <Text style = {[common.whiteColor,{fontSize: 18}]}>
                        Gửi ngay
                    </Text>
                </View>
            </View>
            <ImageBackground source={require('./assets/image/LightUpDay.jpg')} style = {[common.width50,{flex: 1,resizeMode: 'contain', justifyContent:"center", width: '100%'}]}></ImageBackground>
        </SafeAreaView>

        {/* footer*/}
        <SafeAreaView style = {{alignItems:'center', marginBottom: 40}}>
            <MaterialIcons name="celebration" size={44} color="#2a8a15" />
            <Text style={[{fontSize:18, color:'#9DAAAA'}]}>Đã cập nhật thông tin mới nhất </Text>
        </SafeAreaView>

        {/* Footer nav*/}
        <SafeAreaView style={{flex:1}}>
            <SafeAreaView style={{position:"absolute", bottom: 0, left: 0, right: 0, backgroundColor:'red', height:50}}>
                <Text>NAV</Text>
            </SafeAreaView>
        </SafeAreaView>

    </SafeAreaView>
    

    );
}

const common = StyleSheet.create({
    width50:{
        width:"50%"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
    },
    img:{
        width: "65%",
        height : 80,
        resizeMode: "contain",
        justifyContent:'center'
    },
    moreBtnWhite:{
        backgroundColor: '#fff',
        borderRadius : 56,
        maxWidth: "35%",
        marginTop: 12,
        marginBottom:12,
        marginLeft: 20,
        padding: 6,
    },
    moreBtn:{
        backgroundColor: '#2a8a15',
        borderRadius : 56,
        marginTop: 12,
        marginBottom:12,
        marginLeft: 20,
        padding: 6,
    },
    whiteColor:{
        color:"#fff"
    },
    pdleft20:{
        paddingLeft: 20
    },
    pdTop10:{
        paddingTop:10
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
    }
}); 

