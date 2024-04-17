import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation} : HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button 
      title='Go to Details'
      onPress={() => navigation.navigate('Details', {
        productId: '123'
      })}
      />
    </View>
  )
}
export default Home

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