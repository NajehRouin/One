import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

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

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{ justifyContent: 'center',  alignContent:'center', alignItems:'center'}}>
      <AnnimationText style={{width: 250, height: 50}}>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10,marginLeft:15,color:'#1A68B6'}}>ONE ...</Text>
      </AnnimationText>
    </View>
  )
}