import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button ,TouchableOpacity,ToastAndroid} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from 'react-native-elements';

import { DataOne } from '../../Data';

export default function ScanneQrCode({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [dataScanee,setDataScanne]=useState(' ');
  const [ButtonVisible,setButtonVisible]=useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //alert(`${data} a été scanné!`);
    setDataScanne(JSON.stringify(data))
    if (data!=DataOne[0].login.toString()){
      ToastAndroid.show('Aucun code QR valide détecté', ToastAndroid.SHORT);
      setDataScanne(' ');
      //setButtonVisible(false);
    }
    else{
      setButtonVisible(true);
    }
  
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
  
 
               
    <View  style={styles.conatiner}>
      
      <TouchableOpacity style={{...styles.view2retour}}>
                     <Icon
                         name="arrow-left"
                         type="material-community"
                         size={26}
                         onPress={()=>navigation.goBack()}
                     
                     />
 
                 </TouchableOpacity>
      <View style={styles.scanne}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        //style={StyleSheet.absoluteFill}
        style={{width:300,height:300}}
      />
      <Text> Scanner un code OR One </Text>
       
      {scanned && 
     
      
    
      <Button  title={'Réessayer'}  color="#026efd" onPress={() => {setScanned(false);
        setDataScanne(' ');
        setButtonVisible(false);
      }} />
   
      }
   
    </View>
    <View style={{alignItems:'center', alignContent:'center',justifyContent: 'center'}}>
    <Text style={{marginTop:10, }}> {dataScanee} </Text>
    <View style={styles.buttonStyle2}>
      { ButtonVisible && 
        < Button    title={'Créer une transaction'} color='#12A88C'/>
    
      }
      </View>

    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({

  conatiner:{
    flex:1,
  },
  scanne: {
  
  
    alignItems:'center',
    
    alignContent:'center',
 
    justifyContent: 'center',
  },
  view2retour:{
    marginTop:30,
    margin:15,
    width:40,
    height:40,
    // backgroundColor:colors.cardbackground,
    alignItems:"center",
    justifyContent: 'center',
    borderRadius:20,
    },

    buttonStyle2:{
      marginTop:30,
      marginLeft:15,
      marginRight:15
    },
    buttonDesign2:{
      backgroundColor:'#12A88C'
    },
});