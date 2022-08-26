import React from "react";

// react nav 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//Screens
import Footernav from "../Navigation/Footernav";
import HomePage from '../Screens/home';
import Booking from '../Screens/book';
import PayMent from '../Screens/pay';
import Gift from '../Screens/gift';
import Stores from '../Screens/stores';
import Login from '../Screens/login';

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled:{
                        backgroundColor: 'transparent'
                    },
                    headerTransparent : true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    },

                }}
                initialRouteName="Login"
            >
                <Stack.Screen name = "login" component={Login}/>
                <Stack.Screen name = "footernav" component={Footernav}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
