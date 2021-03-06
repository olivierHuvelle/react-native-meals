import React, {useState} from 'react'
import { StyleSheet} from 'react-native'
import MealsNavigator from './navigation/MealsNavigator'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'

enableScreens() //to boost perfs

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFondLoaded] = useState(false)
  const fontLoadedHandler = () => {
    setFondLoaded(true)
  }

  if(!fontLoaded)
  {
    return <AppLoading startAsync={fetchFonts} onFinish={fontLoadedHandler} onError={(err) => console.log(err)}/>
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
