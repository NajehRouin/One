import React from "react";

import { View,Text,StyleSheet,Dimensions } from "react-native";
import { colors,parameters } from "../global/styles";
import { Icon } from "react-native-elements";

export default function Header({title,type}){

    return(
        <View style={styles.header}>
            <View style={{marginLeft:1}}>
                <Icon
                        type="material-community"
                        name={type}
                        color='black'
                        size={50}
                        onPress={()=>{}}
                />
               
            </View>
            <View>
                    <Text style={styles.headeText} >{title}</Text>
                </View>
        </View>
    )

}

const styles=StyleSheet.create({
    header:{

      
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    },

    headeText:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:30
    }
})
