import { ImageBackground, StyleSheet, Text, View ,Animated } from 'react-native'
import React ,{useState,useEffect  }from 'react'
import { DataOne } from '../../Data'

export default function OneHearder({navigation,id}) {
  return (
    <View>
     <ImageBackground
             style={styles.container}
             source={(DataOne[id].images)}
               
            >    
        
            </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({


    container:{
        height:200,
        width:350,
        marginTop:30,
        marginLeft:6,
        marginRight:3
        
    },
  
    view1:{
            flexDirection:"row",
            alignItems:"baseline",
            justifyContent: "space-between",

    },
 
    view3:{
        marginTop:0,
        margin:10,
        width:40,
        height:40,
       // backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:20,
    },
    view4:{
        marginTop:0,
        alignItems:'center',
        justifyContent: 'center',
    }

})