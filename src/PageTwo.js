import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const PageTwo = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>PageTwo</Text>
      <Button title='Click to go back' onPress={()=>{
        navigation.navigate('Home')
      }}/>
    </View>
  )
}

export default PageTwo

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:'green',
        fontSize:'10px',
        justifyContent:'center',
        alignContent:'center',
    },
    text:{

        textAlign:'center'

    }
})