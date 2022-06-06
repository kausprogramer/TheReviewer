import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../../reviw_app/screens/home';
import ReviwDetails from '../../reviw_app/screens/reviwDetails';
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