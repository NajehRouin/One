import React,{useState} from "react";

import {View,Text,StyleSheet,TouchableOpacity,Image,
    ScrollView, TextInput,FlatList, 
   Dimensions,Keyboard,Alert,Modal,Pressable} from 'react-native';

    import {parameters} from '../global/styles'

import HomeHearder from "../components/HomeHearder";
import { colors } from "../global/styles";


const SCREEN_WIDTH = Dimensions.get('window').width;
import { useTheme } from "@react-navigation/native";

//import { Feather as Icon } from '@expo/vector-icons';
import {Icon,  withBadge } from 'react-native-elements'

import OneLisItem from "../components/OneLisItem";

import { DataOne } from "../../Data";
import MapOne from "../components/MapOne";

import StarRating from "../components/StarRating";

const HomeScreen = ({navigation}) =>{
  const [listItem,setListItem]=useState(true);
  const [listGridItem,setListGridItem]=useState(false);
  const [OnmeMap,setOneMap]=useState(false);
  const {colors} =useTheme();
  const [modalVisible, setModalVisible] = useState(false);


    return (

            <View style={styles.container}>


         

     <HomeHearder navigation={navigation} style={{backgroundColor:colors.card}}/>
        
           
                        <View style={{...styles.haderTextView,backgroundColor:colors.card}}>
                            <Text style={{...styles.headerText}}>Membres One</Text>
                            <Text style={{color:colors.text,paddingLeft:15}}>Affichage de {DataOne.length} résultats</Text>
                        </View>
                        


                    <View style={styles.Bouttoncontainer}>
        <View style={styles.Bouttonheader}>
  
                <View style ={{alignItems:"center",    flexDirection:'row', justifyContent:'space-between',marginLeft:40}}>
                    <Icon
                 
                    type ="material-community"
                    name ="format-list-bulleted"
                        color='#747D88'
                    size={32}
                    onPress={()=>{
                      setListItem(true);
                      setListGridItem(false);
                      setOneMap(false);
                     
                  }


                  }
                 
            
                 
                    
                    />
                    <View style={{alignItems:'center' ,justifyContent:'center',marginLeft:90}}>
                    <Icon
                 
                 type ="material-community"
                 name ="apps"
                     color='#747D88'
                 size={32}
                 onPress={()=>{
                  setListGridItem(true);
                  setListItem(false);
                  setOneMap(false);
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
                  setOneMap(true);
                  setListGridItem(false);
                  setListItem(false);
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
                         















                        <View style={styles.saerchbar}>
                        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      > 
         <View >
      <View style={styles.modalView}>

          <View style={{ flexDirection:'row', justifyContent:'space-between',marginBottom:20 }}>
           <Text style={[styles.modalText, styles.modalecolor]}  >#Nom</Text>
           <Text style={[styles.modalText, styles.modalecolor]}>#région</Text>
           <Text style={[styles.modalText, styles.modalecolor]}>#score</Text>
           </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
               <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
            </View>
            </View>
            </Modal>
    
                          <TextInput
                            style={{ paddingHorizontal:20, color:'#191A1C',fontSize:16  }}
                            placeholder="Rechercher .."
                            placeholderTextColor='#191A1C'
                            onPress={() => setModalVisible(true)}
                            
                          />
                                   <Pressable
      
        onPress={() => setModalVisible(true)}
      >
                          <Icon name="filter-variant"  type ="material-community" size={25} color='#191A1C'
                           style={{ marginRight:10 }}
                            />
</Pressable>
                        </View>

            
                     
                       
                        { listItem &&
                           < ScrollView horizontal={true}> 
                                <View>
                                     
                                <FlatList
                   // style={{marginTop:10,marginBottom:10 }}
                    //horizontal={true}
                    
                      data={DataOne}
                      keyExtractor={(item,index)=>index.toString()}
                      renderItem={({item,index})=>(
                        
                        
                     
                        <TouchableOpacity
                        onPress={()=>{
                          Keyboard.dismiss
                         // Alert.alert("One ",item.name+" :"+item.login);
                        

                      }} 
                        >
               
                                    <OneLisItem
                                        //screenwidth={SCREEN_WIDTH*0.8}
                                        images={item.images}
                                        name={item.name}
                                        adresse={item.adresse}
                                        service={item.service}
                                        score={item.score}
                                        
                                        OnpressList={()=>{
                                          navigation.navigate("DetailOne",{id:index,one:item.name })
                                        }}
                                  
                                    />
                                    
                                    </TouchableOpacity>
                       
                   

                      )
                    }
           
                />
                      
             
                                </View>
                                </ScrollView>
                            
                      }
                       
                    
                


                       < ScrollView horizontal={true}> 

{ listGridItem &&
                           
                          <View style={{flex:1, marginTop:1}} >
                     
                 
                      
                              <FlatList
                                   style={{padding:5}}
                                   data ={DataOne}
                                   keyExtractor={item=>item.id}
                                   renderItem={({item,index})=>(
                                  
                                    <TouchableOpacity
                                    onPress={()=>{
                                      Keyboard.dismiss
                                      Alert.alert("One ",item.name+" :"+item.login + " " + item.mdp);
                                    
            
                                  }} 
                                    >
                                       
                                           <View style={styles.imageView}>
                                             
                                               <Image
                                                        style={styles.image}
                                                        source ={item.images}
                                               >
                                              
                                               </Image>
                                               
                                               <View style={styles.textView}>
                                                       <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                                                   </View>
                                           </View>
                                          
                                     
                                           </TouchableOpacity>
           
                                   )}
                                   horizontal={false}
                                   showsHorizontalScrollIndicator={false}
                                   numColumns={2}
                                
                                
           
                              />
                             
                              
                                   
                          </View>
                         
                 
               
                     

                }
                       </ScrollView>





               
                       { OnmeMap &&
                          //MAps 
                                <View>
                             
                     
                          <View style={{padding:10,marginTop:2,marginBottom:30,marginLeft:20,marginRight:20}} >
                            
                                    <MapOne
                                    />
                                  
                          </View>
                   

                     
              
                      
             
                                </View>
                              
                            
                      }



            </View>

    )

}

const styles =StyleSheet.create({

    container:{
        flex:1,
        paddingTop:1,
        
        
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



    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 1
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

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },



headerText :{
    color:"#032D56",
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:10,
    

    

},
Bouttonheader:{
  flexDirection:'row',

  height:parameters.headerHeight,
  justifyContent:'space-between',

  
},
Bouttoncontainer:{

  marginBottom:5

  
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




imageView:{
  borderRadius:10,

  width:SCREEN_WIDTH*0.4430,
  height:SCREEN_WIDTH*0.6000,
  marginLeft:SCREEN_WIDTH*0.035,
  marginBottom:SCREEN_WIDTH*0.0000000001

},
image:{
  height:SCREEN_WIDTH*0.4400,
  width:SCREEN_WIDTH*0.4475,
  borderRadius:3,
},
ListHeader:{fontSize:16,
  color:colors.grey2,
  paddingBottom:10,
  marginLeft:12

},
textView:{
  height:SCREEN_WIDTH*0.1000,
  width:SCREEN_WIDTH*0.4475,
  borderRadius:3,
  alignItems:"flex-start" ,
  justifyContent:"center",
  backgroundColor:"#FFFFFF"
},

modalView: {
  margin: 10,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 30,
  marginTop:100,
  alignItems:'center' ,
  shadowColor: "#000",

  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},

buttonClose: {
  backgroundColor: "#2196F3",
},

modalText: {
  borderRadius: 20,
  padding: 10,
  margin:3,
  elevation: 2
},

modalecolor: {
  backgroundColor: "#2196F3",
},

})
export default HomeScreen;