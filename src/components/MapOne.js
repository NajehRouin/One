import { StyleSheet, Text, View,Dimensions } from 'react-native'
import * as React from 'react';
import MapView from 'react-native-maps';
export default function MapOne() {
  return (
    <View style={styles.container}>
    <MapView 
    
    
    initialRegion={{
        latitude: 35.7772439,
        longitude: 10.8017938,
        latitudeDelta: 0.001990,
        longitudeDelta: 0.000550,
      }}
   
    
    style={styles.map} />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: 350,
      height: 370,
    },
  });