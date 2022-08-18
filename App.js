import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Footernav from './Navigation/Footernav';

import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import { Button } from 'react-native-web';

import { NavigationAction, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';

//Screens
import HomePage from './Screens/home';
import Booking from './Screens/book';
import PayMent from './Screens/pay';
import Gift from './Screens/gift';
import Stores from './Screens/stores';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App(){
    return(
       <Footernav/>
    );
}

export default App;





