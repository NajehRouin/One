import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Users  from '../../../Data'
import {DataOne} from '../../../Data';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
function  SingInScreen (){

  const [data,setData]=useState({
    email:"",
    password:"",
    checkTextInputChange:false,
    secureTextEntry:true,
    isValidUser:true,
    isValidPassword:true
});


const emailChange=(val)=>{
    if(val.length>=4) {
        setData({
            ...data,
            email: val,
            checkTextInputChange:true,
            isValidUser: true
        });
    }
    else{
        setData({
            ...data,
            email:val,
            checkTextInputChange:false,
            isValidUser:false
        })
    }
};
const passwordChange=(val)=>{
    if(val.length>=6){
        setData({
            ...data,
            password:val,
            isValidPassword: true
        });
    }
    else{
        setData({
            ...data,
            password:val,
            isValidPassword:false
        })
    }
};
const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
};

const handleValidUser=(val)=>{
    if(val.length>=4){
        setData({
            ...data,
            isValidUser:true
        })
    }else {
        setData({
            ...data,
            isValidUser: false
        });
    }
};

const login=()=>{
  const{ email, password }=data;
const foundUser = DataOne.filter( item => 
   
    {
      
    return  ((email == item.login) && (password == item.mdp));
  }
  
   );
   console.log('email  :'  +email + ' pwd : ' + password);
   console.log(foundUser.length);
   if ( foundUser.length == 1 ) { 
    navigation.navigate("Welcom")
}
else{
  Alert.alert('user invalide');
}
if ( data.email.length == 0 || data.password.length == 0 ) {
  Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
      {text: 'Okay'}
  ]);
  return;
}
};


    const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <View style={styles.Middle}>
        
        <Box 
        onPress={() => navigation.navigate("#")}  // for navigation 
        style={{height:90, width:90,borderRadius:30,marginTop:20}} 
        shadow={1}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1} style={{ alignItems:'center',
    justifyContent:'center'}}>
          <Image
            roundedTop="lg"
         
           /* borderRadius={30}
            alignItems='center'
            justifyContent='center'*/
            source={
         {uri:"https://jamaity.org/wp-content/uploads/2021/12/O.N.E.png"}
            }
            borderRadius={30}
            borderTopRadius={30}

            alt="image"
          />
        </AspectRatio>
      </Box>
      </View>
   

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input style={{backgroundColor:'#EBEDF0'}}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Adresse e-mail "
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            autoCapitalize="none"
            onChangeText={(val)=>emailChange(val)}
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
        </View>
        {
                            data.checkTextInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                :null
                        }
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input style={{backgroundColor:'#EBEDF0'}}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
           // secureTextEntry={true}
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Mot de passe  "
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            autoCapitalize="none"
            onChangeText={(val)=>passwordChange(val)}
          />

<TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} 
           onPress={() => login()}
        //onPress={() => navigation.navigate("Drawer") }
        >
        se connecter
        </Button>
      </View>
      <View style={styles.text2}>
        <Text style={{color:'#3A4BE3'}}>Mot de passe oublié ? </Text>
       
      </View>
      <View style={styles.buttonStyle2}>
        <Button style={styles.buttonDesign2} onPress={() => navigation.navigate("inscrit")}>
        Créer nouveau compte
        </Button>
      </View>
    
      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Ou</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>
      <Box 
        onPress={() => navigation.navigate("#")}  // for navigation 
        style={{height:50, width:50,borderRadius:30}} 
        shadow={1}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
        shadow={1}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>

   
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

      
export default () => {
    return (
      <NativeBaseProvider>
       
          <SingInScreen />
        
      </NativeBaseProvider>
    )
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:80
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5,
    marginTop:15,
    color:'#3A4BE3'
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5,
   
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    color:'#CBCFD4'
  },


  buttonStyle2:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },


  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },

  buttonDesign2:{
    backgroundColor:'#12A93C'
  },

  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:50,
    height:50,
    marginLeft:20,
    borderRadius:30
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'center'
  },
});
