import { StyleSheet, Text, View } from 'react-native';
import React ,{useLayoutEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';



import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const ClientSearch= createStackNavigator()
const ClientStack = ({navigation,route}) => {
    useLayoutEffect(()=>{
const routeName = getFocusedRouteNameFromRoute(route);

        if (routeName ){
                    navigation.setOptions({tabBarVisible:false})
        }
        else{
            navigation.setOptions({tabBarVisible:true})
        }

    },[navigation,route])
  return (
  
            <ClientSearch.Navigator>
              
         


                
            </ClientSearch.Navigator>

  )
}

export default ClientStack;

const styles = StyleSheet.create({});
