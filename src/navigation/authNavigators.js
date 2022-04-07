import React from "react";

//import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';

import SingInScreen from '../screens/autheScreens/SinginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,TransitionPresets } from '@react-navigation/native-stack';
const Auth=createNativeStackNavigator();


export default function AuthStack(){
    return (
        <NavigationContainer>
        <Auth.Navigator>
     

            <Auth.Screen
                name="Login"
                 component = { SingInScreen }  
                
                 options={{ title: 'Welcome' }} 
            />

        </Auth.Navigator>
        </NavigationContainer>

    )
}