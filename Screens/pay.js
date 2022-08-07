import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';

export default function PayMent({navigation}){
    return(
        <SafeAreaView style ={{flex : 1 }}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Thẻ Starbucks</Text>
            </View>
           <View style={styles.container}>
            <Image 
                style={{width: 400, height: 200,resizeMode: 'contain', justifyContent:"center"}}
                source={require('../assets/image/card.png')}
            />
            </View>
            <View style={styles.container2}>
            <Text style ={styles.Textcn}>Thanh Toán và Bắt Đầu Trải Nghiệm</Text>
            <Text style ={styles.Textcn2}>Để Sử dụng hoặc nạp thêm tiền vào thẻ của bạn,
                hãy đăng nhập hoặc đăng ký chương trình ngay.
            </Text>
            </View>
            
           
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   header:{
        width: "100%",
        backgroundColor:"#fff",
        paddingBottom: 10
   },
   headerText:{
        paddingTop: 80,
        fontSize: 30,
        paddingLeft: 25,
        fontWeight: 'bold',
   },
    container: {
        paddingTop: 20,
        alignItems: 'center',
    },
    container2: {        
        justifyContent: 'center',
        paddingtop: 15,
        margin: 18,

    },
    Textcn: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '400',
        
        
    },
    Textcn2: {
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'left',
        paddingTop: 10   
    },
    
});

