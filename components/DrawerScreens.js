import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/settings'
import Home from '../screens/home'
import About from '../screens/about'

import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';

const Drawer = createDrawerNavigator();


function MenuScreen(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EA807C' }}>
            <View style={{ justifyContent: 'center', alignContent: 'center', backgroundColor: '#EA807C' }}>
                <Text style={{ padding: 20, fontSize: 20, color: 'white' }}>Notifações do Bem =)</Text>
            </View>
            <View style={{ paddingTop: 20, flexGrow: 1, backgroundColor: 'white' }}>
                {menuItem('Home', 'Home', 'home', props)}
                {menuItem('Personalizar', 'Settings', 'gear', props)}
                {menuItem('Sobre', 'About', 'info-circle', props)}
            </View>
            <View style={{ padding: 5, backgroundColor: 'white' }}>
                <Text>Version 1.0</Text>
            </View>
        </SafeAreaView>
    );
}

function menuItem(name, nav, ico = 'question', props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(nav)}>
            <View style={{ marginLeft: 10, height: 50, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginLeft: 10, fontSize: 20, color: '#EA807C' }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class DrawerScreens extends React.Component {
   
    render() {
        return (
            <>
                <Drawer.Navigator drawerContent={props => MenuScreen(props)} initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen name="About" component={About} />
                </Drawer.Navigator>
            </>
        );
    }
}

