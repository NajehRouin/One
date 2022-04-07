import * as React from 'react';

import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';

import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';

import DrawerContent from '../components/DrawerContent';
import MyAccountScreen from '../screens/MyAccountScreen';
import MembreOne from '../screens/MembreOne';
import DashBordScreen from '../screens/DashBordScreen';
import ScanneQrCode from '../screens/ScanneQrCode';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}){

    return(
       
        <Drawer.Navigator
       drawerContent={props=> <DrawerContent{...props}/>  }
        >
            <Drawer.Screen

                name="RootClientTabs"
                component={RootClientTabs}
            
                options={{
                    headerShown: false,
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? '#7cc':colors.grey2}
                            size={size}
                        
                     
                        />
                    ),
                    title:'Accueil'
                    
                    
                   
                }}
            />
          


          <Drawer.Screen

name="Tableau de Bord"
component={ DashBordScreen}

options={{
    headerShown: false,
    drawerIcon:({focussed,size})=>(
        <Icon
            type="material-community"
            name="view-dashboard-outline"
            color={focussed ? '#7cc':colors.grey2}
            size={size}
        
    
        />
    ),
    title:'Tableau de Bord '
    
    

}}
/>


<Drawer.Screen

name="Membres"
component={MembreOne}

options={{
    headerShown: false,
    drawerIcon:({focussed,size})=>(
        <Icon
            type="material-community"
            name="account-group"
            color={focussed ? '#7cc':colors.grey2}
            size={size}
        
    
        />
    ),
    title:'Listes des Membres '
    
    

}}
/>
<Drawer.Screen

name="Profil"
component={MyAccountScreen}

options={{
    headerShown: false,
    drawerIcon:({focussed,size})=>(
        <Icon name='person'
        type='material' 
            color={focussed ? '#7cc':colors.grey2}
            size={size}
        
    
        />
    ),
    title:'profil '
    
    

}}
/>

<Drawer.Screen

name="Scanner QrCode"
component={ ScanneQrCode  }

options={{
    headerShown: false,
    drawerIcon:({focussed,size})=>(
        <Icon name='qrcode-scan'
        type="material-community"
            color={focussed ? '#7cc':colors.grey2}
            size={size}
        
    
        />
    ),
    title:'Scanner QrCode'
    
    

}}
/>

        </Drawer.Navigator>
       

    )

}
