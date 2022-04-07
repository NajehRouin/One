import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,ScrollView} from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Signup() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>S’inscrire</Text>
      </View>
      <View style={styles.text2}>
        <Text>Vous avez déjà un compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> connexion </Text></TouchableOpacity>
      </View>

      {/* Username */}
      <ScrollView style={styles.scrollView}>
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input style={{backgroundColor:'#EBEDF0'}}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="university" />}
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
            placeholder="Nom "
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/*  Email Input Field */}
      <View style={styles.buttonStyleX}>
        
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
            placeholder="Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
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
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

    

{/* nnmero de tel Input Field */}
<View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <Input style={{backgroundColor:'#EBEDF0'}}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="phone" />}
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
            placeholder="numero de tel"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            keyboardType='phone-pad'
            maxLength={13}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>




      {/*  Adresse Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input style={{backgroundColor:'#EBEDF0'}}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="map-marker-alt" />}
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
            placeholder="Adresse"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      
      {/*  type de service  Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input style={{backgroundColor:'#EBEDF0'}}
        
            variant="outline"
            placeholder="Adresse"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>


      {/*  domaine d'activite Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input style={{backgroundColor:'#EBEDF0'}}
         
            variant="outline"
            placeholder="Adresse"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign}>
        S’inscrire
        </Button>
      </View>



      {/* Box */}
     
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Signup />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
      marginTop:20,
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:30,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'flex-start',
    marginLeft:20,
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:8,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:5,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around'
  },
  scrollView: {
    
    marginHorizontal: 20,
  },
});
