
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviwDetails from '../screens/reviwDetails';
const screens= {
    Home:{
        screen:Home,
        navigationOptions:{
            title: 'The Reviewer',
        }
    },
    ReviwDetails:{
        screen:ReviwDetails,
        navigationOptions:{
            title: 'Review Details',
        }
    }

}

const homeStack= createStackNavigator(screens,{ 
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee', height:80},

    }});

export default homeStack;