import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import About from '../screens/about';

const screens={
    About:{
        screen:About,
        navigationOptions:{
            title:'About The Reviewer',
        }
    },
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:
    {
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee', height:80}
    }
})

export default AboutStack;