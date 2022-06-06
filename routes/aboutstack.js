import { createStackNavigator} from 'react-navigation-stack';
import About from '../../reviw_app/screens/about';

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