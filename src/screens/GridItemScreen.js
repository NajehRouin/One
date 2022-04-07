import React,{useState} from "react";

import {View,Text,StyleSheet,TouchableOpacity,Image,
    ScrollView, TextInput} from 'react-native';


import maps from '../../assets/images/maps-i11111t.png'
import HomeHearder from "../components/HomeHearder";

import HeaderBoutton from "../components/HeaderBoutton";

import { useTheme } from "@react-navigation/native";

//import { Feather as Icon } from '@expo/vector-icons';

import {Icon,  withBadge } from 'react-native-elements'

import { Rating } from 'react-native-ratings';
import Etat from "../components/Etat";
import HomeScreen from "./HomeScreen";

export default function GridItemScreen({navigation}) {
    const {colors} =useTheme();
   
    return (


            <View style={styles.container}>


         
              <HomeScreen navigation={navigation} />

            </View>

    )

}

const styles =StyleSheet.create({

    container:{
        flex:1,
        paddingTop:1
        
    },
    card:{
      margin: 1,
     // backgroundColor: '#fff',
      marginRight: 10,
      paddingHorizontal: 5,
      paddingVertical: 4,
      borderRadius: 12,
      flexDirection: 'row',
      marginLeft:10,
      justifyContent:'center',
      alignItems: 'center',
      height: 115,
      marginTop:8
    },


    input: {
      height: 40,
      margin: 5,
      borderWidth: 1,
     marginLeft:30,
     marginRight:30,
     borderRadius:10,
     padding:10

    },



headerText :{
    color:"#032D56",
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:10,
    

    

},
haderTextView:{
   // backgroundColor:"#FFFFFF",
    paddingVertical:1
},
scrollView:{
  marginTop:5
},
saerchbar:{
 
  height:45,
  backgroundColor:'#B5B9BD',
  marginRight:20,
  marginLeft:20,
  paddingLeft:10,
  borderRadius:10,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
}



})