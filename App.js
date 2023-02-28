import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Pageone from './src/Pageone'
import PageTwo from './src/PageTwo'
import ApiData from './src/ApiData'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack=createNativeStackNavigator();
const App = () => {
  return (


    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Pageone} options={{headerShown:false}}/>
    //     <Stack.Screen name='PageTwo' component={PageTwo}/>

    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
    {/* <ApiData/> */}
    </>

  )
}

export default App