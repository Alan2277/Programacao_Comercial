import {useState} from 'react';
import {Text, Image, TextInput, View, StyleSheet } from 'react-native';


const Imagem = ({url}) => {
  return(
    <View style = {styles.estiloImagem}>
      <Image
        style = {styles.formatacaoImagem}
        source= {{uri: url}}
      />
    </View>
  )
}

const TextoSuperior = () => {
  return (
    <View style = {styles.estiloTextoSuperior}>
      <Text>
        Login
      </Text>
    </View>
  )
} 


export default App = () =>{
  return(
    <View style = {styles.container}>
      <TextoSuperior/>
      <Imagem url = 'https://olhonavaga.com.br/images?id=106494'/>
    </View>

  )
}

const styles = StyleSheet.create = {
  container: {
    flex:1,
    backgroundColor: 'blue'
  },
  formatacaoImagem: {
    width: 70,
    height: 70,
  },
  estiloImagem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  estiloTextoSuperior: {
    borderTop: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
}
