import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { globalStyles } from '../style/global';

export default function ReviwDetails({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}
