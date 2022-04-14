import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import  BarCodeScanner  from 'expo-barcode-scanner';


export default function ScanneQrCodeComponent() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`${data} a été scanné!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
    
   
                 
      <View style={styles.container}>
        
  
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
     
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:200,
      marginLeft:80,
      alignItems:'center',
      marginTop:-200,
      marginBottom:10,
      alignContent:'center',
   
      justifyContent: 'center',
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
  });