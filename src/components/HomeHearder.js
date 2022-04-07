import React from "react";

import {View,Text,StyleSheet,Image} from 'react-native';
import {Icon,  withBadge } from 'react-native-elements'
import {parameters} from '../global/styles'
import imageOne from '../../assets/images/logo-one.png'

import { useTheme } from "@react-navigation/native";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


const HomeHearder = ({navigation}) =>{

    const {colors} =useTheme();
   

    return(

            <View style={styles.header}>
      
                    <View style ={{alignItems:"center",    flexDirection:'row', justifyContent:'space-between',marginLeft:20}}>
                        <Icon
                     
                        type ="material-community"
                        name ="menu"
                            color='#747D88'
                        size={32}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                       
                     
                        
                        />
                        <View style={{alignItems:'center' ,justifyContent:'center',marginLeft:20}}>
                        <Text style={{color:'#1A68B6',fontSize:25,fontWeight:"bold"}} >One</Text>
                    </View>
                    
                    </View>
                    
                    <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
                                <Image 
                                          source={imageOne}
                                          style={{ width: 50, height: 50, borderRadius: 50,borderWidth:6 }}
                                />
                    </View>
            </View>


    )
}




const styles=StyleSheet.create({

        header:{
            flexDirection:'row',
         
            height:parameters.headerHeight,
            justifyContent:'space-between',
            marginTop:30,
            alignItems:"center"
            
        }



})
export default HomeHearder;