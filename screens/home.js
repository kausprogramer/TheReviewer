import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { globalStyles } from '../style/global';

export default function Home({navigation}){
    const [reviews,setReviews] = useState([
        {title:'Zelda,Breath of Fresh Air', rating:5, body:'lorem ipsum', key:'1'},
        {title:'Gotta Catch Them All(again)', rating:4, body:'lorem ipsum', key:'2'},
        {title:'Not So Final Fantasy', rating:3, body:'lorem ipsum', key:'3'},
    ]);
    return(
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item})=> (
                    <TouchableOpacity onPress ={()=> navigation.navigate('ReviwDetails',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
