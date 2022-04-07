import React from "react";

import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';

import { Icon ,withBadge} from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';




import MyAccountScreen from "../screens/MyAccountScreen";
import { Touchable, TouchableOpacity } from "react-native";

const ClientTabs =  createBottomTabNavigator();

export default function RootClientTabs(){




    return (
        <ClientTabs.Navigator 
        screenOptions={
          
            {
              // Default Color is blue you can change it by following props
               activeTintColor:'##338DFF',
               inactiveTintColor: '#338DFF',
              // Default Background Color is white you can change it by following props
              activeBackgroundColor: '#338DFF',
               inactiveBackgroundColor: '#338DFF',

              tabBarActiveTintColor:'#5E33FF',
              tabBarStyle: [
                {
                  display: "flex"
                },
                null
              ]
            }
          }
        >
          <ClientTabs.Screen
            name='Accueil'
            component={HomeScreen}
            color='#338DFF'
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='home'
                type='material' 
                color='#338DFF'
                size={size} />
              ),
            }}
          />
       
     <ClientTabs.Screen
            name='Developed by maps-it'
            component={HomeScreen}
           

            options={{
              headerShown: false,
              
              tabBarIcon: ({ color, size }) => (
                
                <MaterialCommunityIcons  color={color} size={size}  />
                
              )
              
            }}
          
          />
      
     
          <ClientTabs.Screen
            name='Profil'
           
            component={MyAccountScreen}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='person'
                type='material' 
                color='#338DFF'
                size={size} />
              ),
            }}
          />



        </ClientTabs.Navigator>
      );

}
