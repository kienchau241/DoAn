import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, ScrollView } from 'react-native';

export default function Booking({navigation}){
    return(
        <SafeAreaView style ={{flex : 1 }}>
            {/*header*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>Đặt Món</Text>
            </View>            
            <View style={styles.header2}>
                <Text style = {styles.headerText1}>Thực Đơn</Text>
                <Text style = {styles.headerText1}>Món Theo Mùa</Text>
                <Text style = {styles.headerText1}>Lịch Sử Đơn Hàng</Text>
            </View>

            {/*Menu*/}
            <ScrollView style={styles.sco}>         
            <View style={styles.menu}>
                <Text style = {styles.menutext}>Món Nước</Text>
                <Text style = {styles.menutext}>Xem Tất Cả</Text>
            </View>
            <View style={styles.menufood}>
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/menufood.png')}/>
                    <Text style = {styles.foodText}>Brewed Coffee</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/menufood2.png')}/>
                    <Text style = {styles.foodText}>Espresso and Coffee</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/menufood3.png')}/>
                    <Text style = {styles.foodText}>Frappuccino blended Beverage</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/menufood4.png')}/>
                    <Text style = {styles.foodText}>Teavana Teas</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/menufood5.png')}/>
                    <Text style = {styles.foodText}>Other Beverages</Text>
                </View> 
            </View>
            {/*Menu thứ 2*/}
            <View style={styles.menu2}>
            <Text style = {styles.menutext2}>Thức Ăn</Text>
            <Text style = {styles.menutext2}>Xem Tất Cả</Text>
            </View>
            <View style={styles.menufood}>
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/food1.png')}/>
                    <Text style = {styles.foodText}>Sandwiches</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/food2.png')}/>
                    <Text style = {styles.foodText}>HotFood</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/food3.png')}/>
                    <Text style = {styles.foodText}>Dessert</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/food4.png')}/>
                    <Text style = {styles.foodText}>Fruits/yogurts</Text>
                </View> 
                <View style={styles.food}>
                    <Image style={{width: 70, height: 70, borderRadius: 400/ 2}} source={require('../assets/image/food5.png')}/>
                    <Text style = {styles.foodText}>Bakery</Text>
                </View> 
            </View>


            </ScrollView>      
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    header:{
         width: "100%",
         backgroundColor:"#fff",
         paddingBottom: 9,
         
    },
    header2:{
        width: "100%",
        backgroundColor:"#fff",
        paddingBottom: 10,
        flexDirection: 'row'       
   },
    headerText:{
         paddingTop: 80,
         fontSize: 30,
         paddingLeft: 25,
         fontWeight: 'bold',
    },
    headerText1:{
        paddingTop: 10,
        fontSize: 16,
        paddingLeft: 15,
        fontWeight: 'bold',
        
    },
    sco:{
        width: '100%',
    },
    menu:{
        
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    menutext:{
        
        fontSize: 17,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 'bold',
    },

    menu2:{
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    menutext2:{
        fontSize: 17,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 'bold',
    },
    menufood:{
        paddingLeft: 20,
        
    },
    food:{
        flexDirection: 'row',
        paddingTop: 30,
    },
    foodText:{
        fontSize: 18,
        paddingLeft: 12,
        paddingTop: 15,
        fontWeight: 'bold',

    }   
 });
 

