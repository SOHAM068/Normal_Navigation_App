import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Home from './Screens/Home'
import Details from './Screens/Details'

export type RootStackParamList = {
  Home : undefined;
  Details : {productId : string}
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{title:'Treding Products'}}
        />
        <Stack.Screen 
        name='Details' 
        component={Details} 
        options={{title:'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}