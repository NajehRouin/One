import React from 'react';
import {StyleSheet,Text, View,TextInput,Dimensions,Image} from 'react-native';
import { Icon ,Button,SocialIcon} from 'react-native-elements';
import { useState,useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { colors,parameters } from '../../global/styles';
import Swiper from 'react-native-swiper';

import img1 from '../../images/femme1.jpg'; 
import img2 from'../../images/vetement.jpg';
import img3 from '../../images/chemis.jpg';

import { NavigationContainer } from '@react-navigation/native';


const NavigationToSingIn =props=>{
    props.navigation.navigate('Sing_In');
}
const WelcomeScreen = ({navigation}) =>{
    return (
        <View style={{flex:1}}>
            <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:10}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}} >DISCOVER STORE</Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}} >IN YOUR AREA</Text>
            
            </View>
            <View style={{flex:14,justifyContent:'center',paddingTop:15}}>
                    <Swiper autoplay={true} >
                        <View style={styles.slide1}>

                            <Image
                                          
                                    source={img1}
                                    style={{height:"100%",width:"100%"}}
                            />
                        </View>

                        <View style={styles.slide2}>

                            <Image

                                source={img2}
                                  style={{height:"100%",width:"100%"}}
                                />
                        </View>
                        <View style={styles.slide3}>

                                <Image

                                    source={img3}
                                     style={{height:"100%",width:"100%"}}
                                />
                        </View>
                    </Swiper>
                    
            </View>
            <View style={{flex:4,justifyContent:"flex-start",marginHorizontal:20}}>
                    <View style={{marginHorizontal:0,marginTop:10}}>
                        <Button
                                title="Sign In"
                                buttonStyle={styles.createButton}
                                titleStyle={styles.createButtonTitle}
                               /* onPress={()=>navigation.navigate({SingInScreen})
                                      
                                }*/
                                onPress={() => navigation.navigate("Sing_In")}                                  
                            
                        />

                    </View>
                    <View style={{marginHorizontal:0,marginTop:10}}>
                <Button
                  title="Create an account"
                  buttonStyle={styles.createButton}
                  titleStyle={styles.createButtonTitle}
                
                />
          </View>
            </View>
        </View>
         
    ) 
}

const styles=StyleSheet.create({

    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#9DD6EB',

    },

    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#92BBD9',
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#92BBD9',

    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
       
        height:50,
        paddingHorizontal:20,
      
         
      },
      createButtonTitle:{
            color:colors.grey1,
            fontSize:20,
            fontWeight:"bold",
            alignItems:"center",
            justifyContent:"center",
            marginTop:-3
      } 

})
export default WelcomeScreen;