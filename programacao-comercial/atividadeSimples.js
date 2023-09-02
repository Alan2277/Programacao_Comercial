import {Text, View, StyleSheet, Image} from 'react-native';


const Imagem = () => {
  return(
    <View style = {styles.imagemStyle}>
      <Image 
        style = {styles.formatoImagem}
        source={{uri: 'https://images.tcdn.com.br/img/img_prod/213069/bandeira_oficial_do_vasco_da_gama_256_x_180_cm_12283_1_e72ace27497f49365ce8998d7f08230e.jpg'}}
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
    padding: 20
  },
  formatoImagem: {
    width: 250,
    height: 165,
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
