
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AboutStack from './aboutstack';
import homeStack from './homeStack';

const RootDrawerNavigator = createDrawerNavigator({
Home:{
    screen:homeStack,
},
About:{
    screen:AboutStack,
}
})

export default createAppContainer(RootDrawerNavigator);