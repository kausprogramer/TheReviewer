import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import About from '../screens/about';
import Header from '../shared/header';

const screens={
    About:{
        screen:About,
        navigationOptions:{
            headerTitle: ()=><Header/>,
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