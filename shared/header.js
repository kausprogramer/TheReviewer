import React from "react";
import {StyleSheet,Text,View}  from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header() {
    return(
        <View styles={Styles.header}>
            <View>
                <MaterialIcons name ='menu' size={28}
                <Text style={Styles.headerText}>The Reviewer</Text>
            </View>
        </View>
    )
}
const Styles= StyleSheet.create({
    header:
    {
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