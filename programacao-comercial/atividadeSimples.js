import {Text, View, StyleSheet, Image} from 'react-native';


const Imagem = () => {
  return(
    <View style = {styles.imagemStyle}>
      <Image 
        style = {styles.formatoImagem}
        source={{uri: 'https://cdn.pixabay.com/photo/2019/03/19/19/38/vasco-4066744_640.png'}}
      />
    </View>
  )
}
const Titulo = () => {
  return(
    <View style = {styles.tituloStyle}>
      <Text style = {styles.formatacaoTitulo}>Vasco da Gama</Text>
    </View>
  )
}
const Texto = () =>{
  return(
    <View style = {styles.textoStyle}>
      <Text>
        O vasco da gama é o MAIOR time da história do RJ 
      </Text>
    </View>

  )
}

const Icone = () => {
  return(
    <View style = {styles.iconeStyle}>
      <Image
        style = {styles.formatacaoIcone}
        source = {{uri: 'https://static.vecteezy.com/system/resources/previews/001/189/080/non_2x/star-png.png'}}
      />
    </View>
  )
}
export default App = () => {
  return(
    <View style = {styles.container}>
      <Imagem/>
      <Titulo/>
      <Texto/>
      <Icone/>
    </View>

  )
}
const styles = StyleSheet.create = {
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  imagemStyle: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  formatoImagem: {
    width: 150,
    height: 350,
  },
  tituloStyle: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formatacaoTitulo: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textoStyle: {
    flex: 2,
    flexDirection: 'row',
    textAlign: 'justify',
    justifyContent: 'center',
    padding: 10,
    borderWeight: 3,
  },
  iconeStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formatacaoIcone: {
    width: 10,
    height: 10,
  },
  informacoesStyle: {
    flex: 1,
  }
}
