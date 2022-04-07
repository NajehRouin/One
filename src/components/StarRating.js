import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const  StarRating=(props)=> {

    let stars=[];
    for(var i=1;i<=5;i++){
        let name='ios-star';
        if (i > props.ratings){
            name='ios-star-outline';
        }
        stars.push((<Ionicons name={name} size={15} style={styles.star} key={i} />));
    }

  return (
    <View  style ={styles.container}>
        { stars }
     
    </View>
  )
}
export default StarRating;

const styles = StyleSheet.create({

    container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	star: {
		color: '#FF8C00'
	},
})