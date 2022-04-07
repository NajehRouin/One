import {View,Text,StyleSheet,Image,
    ScrollView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react'
import { useTheme } from "@react-navigation/native";
//import maps from '../../assets/images/maps-i11111t.png';
import { DataOne } from '../../Data';
import { Rating } from 'react-native-ratings';
import Etat from "./Etat";
import StarRating from './StarRating';
export default function OneLisItem({
    
  name,
  images,
  OnpressList,
  adresse,
  service,
  score,rating
  }) {
    const {colors} =useTheme();
  return (
    <View>
           
           <TouchableOpacity  onPress={ OnpressList }>           
 <View   style={{...styles.card,backgroundColor:colors.card}}>   
      
      <View>
        <Image
          style={{ width: 110, height: 90, borderRadius: 10 }}
          source ={images}
        />
        
      </View>

      <View style={{ flex: 1, paddingHorizontal: 1,paddingLeft:10  }}>
        <Text
          style={{ fontSize: 20,color:colors.text }}
        >{name}</Text>
           <View style={{  paddingHorizontal: 1 }}>
        <Text
          style={{ fontSize: 15,color:colors.text }}
        >{adresse}</Text>
      </View>
          <View style={{  paddingHorizontal: 1 }}>
        <Text
          style={{ fontSize: 15,color:colors.text }} 
        >{service}</Text>
      </View>
      <View style={{ marginRight:130}}>
    <StarRating ratings={DataOne.rating}  />
    
      </View>
      <View style={{  marginLeft:140 ,marginBottom:1}}>
        <Text
          style={{ fontSize: 12,color:colors.text }} 
        >{score} <Etat/> </Text>
      </View>

     
      </View>
     
 </View>          
               
     
 </TouchableOpacity>    

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:1
        
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

})