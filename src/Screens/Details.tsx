import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>
const Details = ({route} : DetailProps) => {
  const productId = route.params.productId;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details : {productId}</Text>
      <Button 
      title='Go to Home'
      // onPress={() => navigation.navigate('Home)}
      onPress={() => navigation.goBack()}
      />
      <Button 
      title='Go to First Screen'
      // onPress={() => navigation.pop(2)}
      onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  smallText: {
      color: "#000000"
  }
})