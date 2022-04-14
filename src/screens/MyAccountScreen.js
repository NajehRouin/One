import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Linking ,ImageBackground,Image} from 'react-native'
import React ,{useState}from 'react'
import Data, { DataOne } from '../../Data'

import OneHearder from '../components/OneHearder'
import { Icon } from 'react-native-elements';
import { Rating } from 'react-native-ratings';
import imageOne from '../../assets/images/maps-i11111t.png'
import QRCode from 'react-native-qrcode-svg';
import { useTheme } from "@react-navigation/native";

 export default function MyAccountScreen({navigation}){
   const state = {
       text: DataOne[0].login.toString() ,
      
      };
      const {colors} =useTheme();

    const [btnMsg,setBtnMsg]=useState(true);  
    const pressCall=()=>{
     const url='tel://'+'21636339';
     Linking.openURL(url)
   }
 
   const press_Sms = async () => {
   
      await SMS.sendSMSAsync(  '21636339','','');
     
   }
 
 
   

 
   return (
     <View style={{...styles.container,backgroundColor:colors.card}}>
    
    
   
                 <TouchableOpacity style={{...styles.view2retour}}>
                     <Icon
                         name="arrow-left"
                         type="material-community"
                         size={26}
                         onPress={()=>navigation.goBack()}
                     
                     />
 
                 </TouchableOpacity>
             
             
                 <ScrollView showsVerticalScrollIndicator={true} >
               <View >
                   <Image
                   style={{
                       height:180,
                    width:350,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    marginTop:10,
                    marginLeft:6,
                    marginRight:6,
                    marginBottom:10,
                 }}
                    source={imageOne}
                   />
               </View>
              
              
               <View style={styles.view2}>
                   <View style={styles.view3}>
                   <View style={{ justifyContent:'space-between',flexDirection:'row',alignContent:'center',alignItems:'center' }}>
                                 <Rating
                                            imageSize={15}
                     
                                             onFinishRating={(rating) => {
                                              alert('Star Rating: ' + JSON.stringify(rating));
                                            }}
                 
                       
                                  />
                                  <Text style={styles.txt_transaction}>(2000 transactions)</Text>
                             </View>  
                             <Text style={styles.txtScore}>Score(100)</Text>
                             <View style={{ justifyContent:'space-between',flexDirection:'row',alignContent:'center',alignItems:'center' }}>
                             <Icon
                                 name="bank"
                                 type="material-community"
                               
                                 size={26}
                                 style={{marginLeft:10}}
                             
                             />
                             <Text style={styles.txtName}>maps-it</Text>

                             <Icon
                                 name="pencil"
                                 type="material-community"
                               
                                 size={26}
                                 
                             
                             />

                             </View>
 
                          
                           
                               <View style={styles.view4}>
                               <Icon
                                 name="map-marker"
                                 type="material-community"
                                 color='red'
                                 size={26}
                                 style={{flex: 2}}
                             
                             />
                                 <Text style={styles.txtAdress}>monastir</Text>
                                 
                               
 
                           
                               </View>
                               <View style={styles.view4}>
                               <Icon
                                 name="email-outline"
                                 type="material-community"
                                 color='red'
                                 size={26}
                                 style={{flex: 2}}
                             
                             
                             />
                                 <Text style={styles.txtlogin}> maps@gmail.com</Text>
                                 
                               
 
                           

                               </View>
 
                               <View style={ {  justifyContent:'space-between',marginTop:5, alignContent:'center',alignItems:'center',flexDirection:'row' }}>
 
                                            <TouchableOpacity onPress={pressCall}>
                                                <Icon
                                                name="phone"
                                                color="green"
                                                size={35}
                                                style={{marginLeft:10}}

                                                /> 
                                            </TouchableOpacity>
                                            <Text style={styles.txt_numTel}> 21385365</Text>


                                </View>
                               <View style={styles.view4}>
                               <Text style={styles.txt_titre_service}>Type de L’entreprise:</Text>
                                 <Text style={styles.txtservice}>Prestataire de service</Text>
                                 
                               
 
                           
                               </View>
 
                               <View style={styles.view4}>
                               <Text style={styles.txt_titre_service}>Domaine d’activite:</Text>
                                 <Text style={styles.txtservice}>Service informatique</Text>
                                 
                               
 
                           
                               </View>
                   </View>
                  
 
               </View>
 
                    

                    <View style={{marginTop:50,marginBottom:90, alignItems:"center"}}>
                        <QRCode
                            value={state.text.length > 0 ? state.text : "health app"}
                            size={200}
                            bgColor='#000000'
                            fgColor='#FFFFFF'
                        />
                    </View>
 
 
                    </ScrollView>
                          
      
 
  
 
 
   
   </View>
 );
 };
 
 
 
 const styles = StyleSheet.create({
 
   container:{
     flex:1,
     paddingTop:20,
    
 
    
   },
   view1:{
     width:"100%",
     padding:3,
     alignItems:"center",
     justifyContent:"center"
   },
 
   viewretour:{
     flexDirection:"row",
     alignItems:"baseline",
     justifyContent: "space-between",
 
 },
 view2retour:{
 margin:10,
 width:40,
 height:40,
 // backgroundColor:colors.cardbackground,
 alignItems:"center",
 justifyContent: 'center',
 borderRadius:20,
 },
 
 text1:{
 color:"green",
 fontSize:14,
 fontWeight:"bold"
 },
 view2:{
 flexDirection:"row",
 flex:1,
 marginBottom:5,
 marginHorizontal:5,
 justifyContent:"space-between"
 },
 view3:{
 flex:8
 },
 text2:{
 fontSize:20,
 fontWeight:"bold",
 color:'#1A68B6',
 marginTop:10,
 alignContent:'center',
 alignItems:'center',

 },
 text3:{
 fontSize:15,
 //color:colors.grey3
 },
 view4:{
  flex: 1,
  padding: 10,
 flexDirection:'row',
 alignItems:"center",
 marginTop:5,
 justifyContent:'space-between'
 },
 txtName:{
 //fontFamily:fonts.android.bold,
 fontSize:20,
 color:'#032D56',

 },
 
 txt_transaction:{
   //fontFamily:fonts.android.bold,
   fontSize:15,
   color:'#7C7E82',
   marginLeft:5,
   alignItems:'center',

   },
 
 txtScore:{
   //fontFamily:fonts.android.bold,
   fontSize:15,
   color:'#7C7E82',
   marginLeft:2
   },
 
 txtAdress:{
   //fontFamily:fonts.android.bold,
   flex: 2,
   fontSize:20,
   color:'#032D56',
   textAlign:'center',
   justifyContent:'center',
  
   },
 
 
   txtlogin:{
     //fontFamily:fonts.android.bold,
     flex: 2,
     fontSize:20,
     color:'#032D56',
     textAlign:'center',
     justifyContent:'center',
   
     },
     txt_numTel:{
        //fontFamily:fonts.android.bold,
        flex: 2,
        fontSize:20,
        color:'#032D56',
        textAlign:'center',
        justifyContent:'center',
      
       
        },
 
     txt_titre_service:{
       //fontFamily:fonts.android.bold,
       fontSize:10,
       color:'#7C7E82',
    
       },
 
     txtservice:{
       //fontFamily:fonts.android.bold,
       fontSize:20,
       color:'#032D56',
       marginRight:20
       },
 
 
 
 });
 