import React, { useEffect, useState,useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,Image,Dimensions,Text,Animated 
} from 'react-native';

import img from '../../assets/images/Dual.gif';


const LoadingImage = () => {
    const [counter, setCounter] = useState(1);
    const MAX_DOTS = 3;

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter((counter % MAX_DOTS) + 1);
        }, 1000);
        return () => clearInterval(intervalID);
    }, [counter]);



    return (
        <View style={{
            flexDirection:'column' ,
            justifyContent: 'center',
            alignContent:'center',
            alignItems:'center',
          
        }}>
            <Image
               style={{width:60,height:60}}
               source={img}
              
            />

         
            
            
        </View>
    );
};

const AnnimationText = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
          
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default function AnimationWelcom({navigation}) {
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            navigation.navigate('Drawer');
        }, 5000);

        return () => clearTimeout(timeoutID);
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
          
            <LoadingImage />
    <View style={{ justifyContent: 'center',  alignContent:'center', alignItems:'center'}}>
      <AnnimationText style={{width: 250, height: 50}}>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10,marginLeft:15,color:'#1A68B6'}}>Bienvenue</Text>
      </AnnimationText>
    </View>
          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flex: 1,
        backgroundColor: '#FFF',
        
    },


})