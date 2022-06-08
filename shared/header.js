import React from "react";
import {StyleSheet,Text,View,TouchableOpacity}  from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function Header({navigation}) {
    // const openMenu=() => {
    //     navigation.dispatch(DrawerActions.openDrawer())
    //     }
    
    return(
        <View styles={Styles.header}>
            <TouchableOpacity
        style={{paddingRight: 8}}
        onPress={() => navigation.toggleDrawer()}>
        <MaterialIcons name ='menu' size={28} onPress={navigation.toggleDrawer()} style={Styles.icon}/>
        
      </TouchableOpacity>
        </View>
    )
}
const Styles= StyleSheet.create({
    header:
    {
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignDirection:'center',
        justifyContent:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    }
})