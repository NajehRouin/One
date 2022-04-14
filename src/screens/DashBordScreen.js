import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import HomeHearder from "../components/HomeHearder";
import {
  
    PieChart,

  } from "react-native-chart-kit";
;
import { useTheme } from "@react-navigation/native";


const screenWidth = Dimensions.get("window").width;

export default function DashBordScreen({navigation}) {

    const data = [
        {
          name: "Service",
          population: 39.5,
          color: "#855CF8",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "industriel",
          population: 16,
          color: "#183AEF",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "commercial",
          population: 44.5,
          color: "#152163",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
    
      ];

     const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
    const {colors} =useTheme();
    return (
        
        <View style={styles.container}>
           <HomeHearder navigation={navigation} />
        <View style={{marginTop:10,padding:2}}>
           <PieChart
                             data={data}
                             width={screenWidth-20}
                             height={180}
                             chartConfig={chartConfig}
                             accessor={"population"}
                             backgroundColor={"transparent"}
                             paddingLeft={"1"}
                             center={[10,10]}
                             absolute
/>
</View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
      
        
    },

    container2: {
     
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
      },
      header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
      },
    headerText :{
        color:"#032D56",
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:10,
        
    
        
    
    },
    haderTextView:{
       // backgroundColor:"#FFFFFF",
        paddingVertical:1
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
      }


})