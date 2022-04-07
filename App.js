import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,StatusBar} from 'react-native';



import SingInScreen from './src/screens/autheScreens/SingInScreen'

import { NavigationContainer,DefaultTheme,DarkTheme,useTheme } from "@react-navigation/native";


import { createStackNavigator } from "@react-navigation/stack";

import RootClientTabs from "./src/navigation/ClientTab";

import DrawerNavigator from "./src/navigation/DrawerNavigator";
import Signup from "./src/screens/autheScreens/Signup";
import { EventRegister } from "react-native-event-listeners";
import GridItemScreen from "./src/screens/GridItemScreen";
import DetailOne from "./src/screens/DetailOne";


const Stack=createStackNavigator();
export default function App(){
  const [darkMode,setDarkMode] =useState(false);
  const appTheme=darkMode ? DarkTheme : DefaultTheme;
  useEffect(()=>{
    let eventListener =EventRegister.addEventListener(
      'changeThemeEvent',
      data=>{
        setDarkMode(data);
      },
    );

    return ()=>{
      EventRegister.removeEventListener(eventListener);
    };
  },[]);
  return (

    <View style={styles.container}>
      <StatusBar
        barStyle="Light-content"
        backgroundColor='#6c757d'
      />
<NavigationContainer theme={appTheme}>
  <Stack.Navigator initialRouteName="Login">
   
    <Stack.Screen name="Login" component={SingInScreen}  options={{headerShown: false}}/>
    <Stack.Screen name="inscrit" component={Signup} options={{headerShown: false}}/>
    <Stack.Screen name="Accueil" component={RootClientTabs} options={{headerShown: false}}/>
 
    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/>
    <Stack.Screen name="Grid" component={GridItemScreen} options={{headerShown: false}}/>
    <Stack.Screen name="DetailOne" component={ DetailOne } options={{headerShown: false}}/>
  
  </Stack.Navigator>
</NavigationContainer>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{flex:1}
})
