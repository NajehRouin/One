import {View,StyleSheet,} from 'react-native';
import React from 'react'
import HomeHearder from "../components/HomeHearder";
;
import { useTheme } from "@react-navigation/native";

export default function DashBordScreen({navigation}) {
    const {colors} =useTheme();
    return (
        
        <View style={styles.container}>
           <HomeHearder navigation={navigation} />

        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:1
        
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