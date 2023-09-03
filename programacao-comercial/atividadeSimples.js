import {Text, View, StyleSheet, Image} from 'react-native';

const imagem = 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vasco_da_Gama2.png';
const estrela = 'https://static.vecteezy.com/system/resources/previews/001/189/080/non_2x/star-png.png';
const iconeTrofeu = 'https://cdn-icons-png.flaticon.com/128/7466/7466210.png';
const iconeTorcedores = 'https://cdn-icons-png.flaticon.com/128/74/74577.png';
const iconeEstadio = 'https://cdn-icons-png.flaticon.com/128/53/53213.png';


const Imagem = () => {
  return(
    <View style = {styles.imagemStyle}>
      <Image 
        style = {styles.formatoImagem}
        source={{uri: imagem}}
      />
    </View>
  )
}
const Titulo = () => {
  return(
    <View style = {styles.tituloStyle}>
      <Text style = {styles.formatacaoTitulo}>Club de Regatas Vasco da Gama</Text>
    </View>
  )
}
const Texto = () =>{
  return(
    <View style = {styles.textoStyle}>
      <Text>
        O Vasco tem uma história rica e conquistou muitos títulos importantes ao longo dos anos, incluindo campeonatos nacionais e estaduais, bem como competições internacionais. 
      </Text>
    </View>

  )
}
const Avaliacao = () => {
  return(
    <View style = {styles.avaliacaoStyle}>
      <Image
        style = {styles.formatacaoAvaliacao}
        source = {{uri: estrela}}
      />
      <Image
        style = {styles.formatacaoAvaliacao}
        source = {{uri: estrela}}
      />
      <Image
        style = {styles.formatacaoAvaliacao}
        source = {{uri: estrela}}
      />
      <Image
        style = {styles.formatacaoAvaliacao}
        source = {{uri: estrela}}
      />
    <Image
        style = {styles.formatacaoAvaliacao}
        source = {{uri: estrela}}
      />
      <Text style = {styles.textoFormatacao}>170 Review</Text>
    </View>
  )
}
const Informacoes = () => {
  return(
    <View>
    <View style = {styles.informacoesStyle}>
    <Image
        style = {styles.formatacaoInformacoes}
        source = {{uri: iconeTrofeu}}
      />
    <Image
        style = {styles.formatacaoInformacoes}
        source = {{uri: iconeTorcedores}}
      />
    <Image
        style = {styles.formatacaoInformacoes}
        source = {{uri: iconeEstadio}}
      />
    </View>
    <View style = {styles.textoInformacoes1}>
      <Text>Títulos</Text>
      <Text>Torcedores</Text>
      <Text>Estadio</Text>
    </View>
    <View style = {styles.textoInformacoes2}>
      <Text>115</Text>
      <Text>13.292.800</Text>
      <Text> São Januário</Text>
    </View>

    </View>
  )
}

export default App = () => {
  return(
    <View style = {styles.container}>
      <Imagem/>
      <Titulo/>
      <Texto/>
      <Avaliacao/>
      <Informacoes/>
    </View>

  )
}
const styles = StyleSheet.create = {
  container: {
    flex: 1,
  },
  imagemStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  formatoImagem: {
    width: 150,
    height: 110,
  },
  tituloStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 7,
    paddingBottom: 7,
  },
  formatacaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoStyle: {
    flexDirection: 'row',
    textAlign: 'justify',
    justifyContent: 'center',
    padding: 8,
  },
  avaliacaoStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  formatacaoAvaliacao: {
    width: 20,
    height: 20,
    paddingTop:7
  },
  textoFormatacao: {
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    textAlign: 'justify',
    justifyContent: 'center',
    paddingLeft: 13,
  },
  informacoesStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    paddingTop: 50,
  },
  formatacaoInformacoes: {
    width: 30,
    height: 30,
  },
  textoInformacoes1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 8
  },
    textoInformacoes2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 18,
  }
}
