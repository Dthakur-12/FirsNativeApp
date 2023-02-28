import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'

const ApiData = () => {
    const [NamePokemon,setNamePokemon]=useState('')
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response)=>{
            console.log(response.data.results)
            setNamePokemon(response.data.results);
        }).catch((error)=>{
            console.log(error)
        })

    },[])
    // console.log("here is the name",NamePokemon);
  return (
    <View>
      <Text>ApiData</Text>
      {
        NamePokemon.map((names)=>{
            return(
                <View>
                    <Text>{names.name}</Text>

                </View>
            )
        })
      }
    </View>
  )
}

export default ApiData

const styles = StyleSheet.create({})