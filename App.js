import  React,{useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { globalStyles } from '../TheReviewer/style/global';
import Navigator from '../TheReviewer/routes/draw';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator/>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
        onError={(error)=> console.warn(error)}
      />
    )
  }
}
