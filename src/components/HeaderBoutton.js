
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import {Icon,  withBadge } from 'react-native-elements'
import {parameters} from '../global/styles'

const  HeaderBoutton=({navigation})=> {
 
    return(
        <View style={styles.container}>
        <View style={styles.header}>
  
                <View style ={{alignItems:"center",    flexDirection:'row', justifyContent:'space-between',marginLeft:40}}>
                    <Icon
                 
                    type ="material-community"
                    name ="format-list-bulleted"
                        color='#747D88'
                    size={32}
                    onPress={()=>{
                            navigation.navigate("Accueil")
                    }}
                 
            
                 
                    
                    />
                    <View style={{alignItems:'center' ,justifyContent:'center',marginLeft:90}}>
                    <Icon
                 
                 type ="material-community"
                 name ="apps"
                     color='#747D88'
                 size={32}
                 onPress={()=>{
                    navigation.navigate("Grid");
                 }}
              
                
              
                 
                 />
                </View>
                </View>
                
                <View style={{alignItems:'center',justifyContent:'center',marginRight:40}}>
                <Icon
                 
                 type ="material-community"
                 name ="map-marker"
                     color='#747D88'
                 size={32}
                 onPress={()=>{
                         navigation.navigate("Profil")
                 }}
              
                
              
                 
                 />
                </View>
  
        </View>
      
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black',marginLeft:20}} />
  <View>
    
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black',marginRight:20}} />
</View>
 
 

  
</View>
     


)
}




const styles=StyleSheet.create({

    header:{
        flexDirection:'row',
     
        height:parameters.headerHeight,
        justifyContent:'space-between',
     
        
    },
    container:{
   
        marginBottom:5
  
        
    },



})
export default HeaderBoutton;