import {View,Text,StyleSheet,
    TextInput} from 'react-native';
import React from 'react'
import HomeHearder from "../components/HomeHearder";
import HeaderBoutton from "../components/HeaderBoutton";
import { useTheme } from "@react-navigation/native";
import { Feather as Icon } from '@expo/vector-icons';
export default function MembreOne({navigation}) {
    const {colors} =useTheme();
    return (
        
        <View style={styles.container}>
           <HomeHearder navigation={navigation} />
           <View style={{...styles.haderTextView,backgroundColor:colors.card}}>
                            <Text style={{...styles.headerText}}>Membres One</Text>
                            <Text style={{color:colors.text,paddingLeft:15}}>Affichage de 350 résultats</Text>
                        </View>
                        <HeaderBoutton  navigation={navigation}  /> 
                        <View style={styles.saerchbar}>
                          
                          <TextInput
                            style={{ paddingHorizontal:20, color:'#191A1C',fontSize:16  }}
                            placeholder="Rechercher .."
                            placeholderTextColor='#191A1C'
                            
                          />
                          <Icon name="search" size={15} color='#191A1C'
                           style={{ marginRight:10 }} />

                        </View>
        </View>
    )
}

const styles =StyleSheet.create({

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