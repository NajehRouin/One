import React ,{useState,useContext,useEffect} from 'react';
import { View,Text,Linking,Pressable,Alert,Switch ,StyleSheet} from 'react-native';

import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';

import { Avatar,Button,Icon } from 'react-native-elements';
import { colors } from '../global/styles';

import { useTheme } from "@react-navigation/native";

import { EventRegister } from 'react-native-event-listeners';

const DrawerContent = (props) =>{
const [darkMode,setDarkMode]=useState(false);
const {colors} =useTheme();
return(
    <View style={{flex:1,backgroundColor:colors.background}}>
        <DrawerContentScrollView {...props}>
           
           
            <View style={{flexDirection:'row' ,justifyContent:'flex-end',alignContent:'center',
            alignItems:'center',color:colors.text}}>
            <Icon
                           type="material-community"
                                name="arrow-left-bold"
                              
                                size={40}
                                onPress={()=>{
                                    props.navigation.closeDrawer();
                            }}
                               
                        />
                <Text style={{ justifyContent:'center' ,fontSize:35,fontWeight:'bold' }}></Text>
              
            </View>
      
        <View style={{borderTopWidth:1 , marginBottom:10,marginTop:10}}></View>
            <DrawerItemList {...props}/>
           
                
         
            <View   style={{ borderTopWidth:3, borderTopColor:colors.grey5  }}>
                            <Text style={styles.preferences}>Preference</Text>
                            <View style={styles.switchText} >
                                <Text style={styles.darkthem} > Mode sombre</Text>
                                <View style={{paddingRight:10}}>
                                        <Switch
                                            trackColor={{false:"#767577",true:"#81b0ff"}}
                                            thumbColor="#f4f3f4"  
                                            value={darkMode}
                                           onValueChange={val=>{setDarkMode(val);
                                            EventRegister.emit('changeThemeEvent',val);
                                        }}
                                            
                                            
                                        
                                        />

                                </View>
                            </View>
            </View>
          
            </DrawerContentScrollView>
            <DrawerItem
                    label="deconnecte"
                    icon={({color,size})=>(
                        <Icon
                                type="material-community"
                                name="logout-variant"
                                color={color}
                                size={size}
                                onPress={()=>{
                                    props.navigation.navigate("Login");
                            }}

                        />

                    )}
            
                    />
    </View>
)



}

const styles=StyleSheet.create({ 
    container:{
        flex:1,
    },
    avatar:{
        borderWidth:2,
        borderColor:colors.buttons


    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10


    },
    darkthem:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold',
        
    }
})
export default DrawerContent;