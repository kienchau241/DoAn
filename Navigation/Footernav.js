import * as React from 'react';
import { NavigationAction, NavigationContainer,ScrollView } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
//Icons
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
//Screens
import HomePage from '../Screens/home';
import Booking from '../Screens/book';
import PayMent from '../Screens/pay';
import Gift from '../Screens/gift';
    import Stores from '../Screens/stores';
import { FlatList, View } from 'react-native-web';

//Screen names
const homeName = 'Home';
const bookTab = 'Book';
const payTab = 'Pay';
const giftTab = 'Gift';
const storesTab = 'Stores';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Footernav(){
    return(
        <NavigationContainer>
                <Tab.Navigator
                initialRouteName = {homeName}
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, color, size} ) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName ){
                            iconName = focused ? 'star' : 'star-outline' 
                        } else if (rn === bookTab){
                            iconName = focused ? 'restaurant' : 'restaurant-outline' 
                        } else if (rn === payTab ){
                            iconName = focused ? 'card' : 'card-outline' 
                        } else if (rn === giftTab ){
                            iconName = focused ? 'gift' : 'gift-outline' 
                        } else if (rn === storesTab ){
                            iconName = focused ? 'location' : 'location-outline' 
                        }

                        return  <Ionicons name={iconName} size={size} color={color} />
                    }
                })} 
                tabBarOptions = {{
                    activeTintColor:'#2a8a15',
                    inactiveTintColor: 'grey',
                    scrollEnabled: true,
                    tabstyle:{
                        flex:1
                    } 
                }}
                
                > 
                    <Tab.Screen name = {homeName} component = {HomePage}/>
                    <Tab.Screen name = {payTab} component = {PayMent}/>
                    <Tab.Screen name = {bookTab} component = {Booking}/>
                    <Tab.Screen name = {giftTab} component = {Gift}/>
                    <Tab.Screen name = {storesTab} component = {Stores}/>
                </Tab.Navigator>
               
        </NavigationContainer>
    );
}