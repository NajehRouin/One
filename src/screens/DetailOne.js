import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Linking } from 'react-native'
import React ,{useState}from 'react'
import { DataOne } from '../../Data'
import OneHearder from '../components/OneHearder'
import { Icon } from 'react-native-elements';
import { Rating } from 'react-native-ratings';


import * as SMS from 'expo-sms';

export default function DetailOne({navigation,route}) {

  const [btnMsg,setBtnMsg]=useState(true);  
   const pressCall=()=>{
    const url='tel://'+DataOne[id].numeroTel;
    Linking.openURL(url)
  }

  const press_Sms = async () => {
  
     await SMS.sendSMSAsync(  [DataOne[id].numeroTel.toString()],'','');
    
  }


  
  const {id,one}=route.params

  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
      <View style={styles.viewretour}>
                <View style={styles.view2retour}>
                    <Icon
                        name="arrow-left"
                        type="material-community"
                        size={26}
                        onPress={()=>navigation.goBack()}
                    
                    />

                </View>
                <Text style={styles.text2}> Detail {DataOne[id].name } </Text>
                </View>
    
              <OneHearder id={id} navigation={navigation}/>
             
              <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#B3B7BC',marginLeft:10}} />
  <View>
    
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#B3B7BC',marginRight:10}} />
</View>

              <View style={styles.view2}>
                  <View style={styles.view3}>
                                
                          <Text style={styles.txtName}>{DataOne[id].name}</Text>
                          <View style={{ justifyContent:'space-between',flexDirection:'row',alignContent:'center',alignItems:'center' }}>
                                <Rating
                                           imageSize={15}
                    
                                            onFinishRating={(rating) => {
                                             alert('Star Rating: ' + JSON.stringify(rating));
                                           }}
                
                      
                                 />
                                 <Text style={styles.txt_transaction}>({DataOne[id].transaction} transactions)</Text>
                            </View>
                          <Text style={styles.txtScore}>Score({DataOne[id].score})</Text>
                              <View style={styles.view4}>
                              <Icon
                                name="map-marker"
                                type="material-community"
                                color='red'
                                size={26}
                            
                            
                            />
                                <Text style={styles.txtAdress}>{DataOne[id].adresse}</Text>
                                
                              

                          
                              </View>
                              <View style={styles.view4}>
                              <Icon
                                name="email-outline"
                                type="material-community"
                                color='red'
                                size={26}
                            
                            
                            />
                                <Text style={styles.txtlogin}>{DataOne[id].login}</Text>
                                
                              

                          
                              </View>


                              <View style={styles.view4}>
                              <Text style={styles.txt_titre_service}>Type de L’entreprise:</Text>
                                <Text style={styles.txtservice}>{DataOne[id].type}</Text>
                                
                              

                          
                              </View>

                              <View style={styles.view4}>
                              <Text style={styles.txt_titre_service}>Domaine d’activite:</Text>
                                <Text style={styles.txtservice}>{DataOne[id].service}</Text>
                                
                              

                          
                              </View>
                  </View>
                 

              </View>


              <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
                          <View style={{flex: 1, height: 1, backgroundColor: '#B3B7BC',marginLeft:10}} />
                          <View>
                            
                          </View>
                          <View style={{flex: 1, height: 1, backgroundColor: '#B3B7BC',marginRight:10}} />
              </View>



                                  <View style={ {  justifyContent:'space-between',marginTop:20,marginRight:60,marginLeft:60, alignContent:'center',alignItems:'center',flexDirection:'row' }}>

                                            <TouchableOpacity onPress={pressCall}>
                                                <Icon
                                                  name="phone"
                                                  color="green"
                                                  size={35}

                                                />
                                            </TouchableOpacity>


                                            <TouchableOpacity onPress={press_Sms}>
                                                <Icon
                                                  name="message"
                                                  type="Feather"
                                                  color="yellow"
                                                  size={35}
                                                  
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Icon
                                                  name="facebook-messenger"
                                                  type="material-community"
                                                  color="blue"
                                                  size={35}
                                                  
                                                />
                                            </TouchableOpacity>
                                  </View>
      </View>
 

  </ScrollView>


  
  </View>
);
};



const styles = StyleSheet.create({

  container:{
    flex:1,
    paddingTop:20,
    backgroundColor:'#FFFFFF'

   
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
marginRight:115
},
text3:{
fontSize:15,
//color:colors.grey3
},
view4:{
flexDirection:'row',
alignItems:"center",
marginTop:5,
justifyContent:'space-between'
},
txtName:{
//fontFamily:fonts.android.bold,
fontSize:25,
color:'#032D56',
marginLeft:2
},

txt_transaction:{
  //fontFamily:fonts.android.bold,
  fontSize:15,
  color:'#7C7E82',
  marginLeft:5,
  alignItems:'center',
  marginRight:160
  },

txtScore:{
  //fontFamily:fonts.android.bold,
  fontSize:15,
  color:'#7C7E82',
  marginLeft:2
  },

txtAdress:{
  //fontFamily:fonts.android.bold,
  fontSize:25,
  color:'#032D56',
  marginRight:220
  },


  txtlogin:{
    //fontFamily:fonts.android.bold,
    fontSize:25,
    color:'#032D56',
    marginRight:112
    },


    txt_titre_service:{
      //fontFamily:fonts.android.bold,
      fontSize:16,
      color:'#7C7E82',
   
      },

    txtservice:{
      //fontFamily:fonts.android.bold,
      fontSize:20,
      color:'#032D56',
      marginRight:20
      },

text5:{
//fontFamily:fonts.android.bold,
fontSize:13,
//color:colors.grey3,
marginLeft:2,
marginRight:5
},
text6:{
//fontFamily:fonts.android.bold,
fontSize:13,
//color:colors.grey3,
marginLeft:0,

},









});
