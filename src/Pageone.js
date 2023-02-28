import { Button, StyleSheet, Text, View } from 'react-native'
import React,{} from 'react'

const Pageone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',color:'red',fontSize:20}}>Pageone</Text>
      <Button title='Click to Navigate' onPress={()=>{navigation.navigate('PageTwo')}}/>
    </View>
  )
}

export default Pageone

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        fontSize:'10px',
        justifyContent:'center',
        alignContent:'center',
     
    }
})