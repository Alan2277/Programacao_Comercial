import { Text, View, StyleSheet, Image } from 'react-native';

const imagem = 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vasco_da_Gama2.png';
const estrelaPreenchida = 'https://cdn-icons-png.flaticon.com/128/118/118669.png';
const estrelaMetade = 'https://cdn-icons-png.flaticon.com/128/25/25662.png';
const iconeTrofeu = 'https://cdn-icons-png.flaticon.com/128/7466/7466210.png';
const iconeTorcedores = 'https://cdn-icons-png.flaticon.com/128/74/74577.png';
const iconeEstadio = 'https://cdn-icons-png.flaticon.com/128/53/53213.png';


const Imagem = () => {
  return (
    <View style={styles.styleImagem}>
      <Image
        style={styles.formatacaoImagem}
        source={{ uri: imagem }}
      />
    </View>
  )
}

const Titulo = () => {
  return (
    <View style={styles.styleTitulo}>
      <Text style={styles.formatacaoTitulo}>
        Club de Regatas Vasco da Gama
      </Text>
    </View>
  )
}

const Texto = () => {
  return (
    <View style={styles.styleTexto}>
      <Text style={styles.formatacaoTexto}>
        O Vasco tem uma história rica e conquistou muitos títulos importantes ao longo dos anos, incluindo campeonatos nacionais e estaduais, bem como competições internacionais.
      </Text>
    </View>
  )
}

const Estrela_Prenchida = () => {
  return (
    <View style={styles.styleEstrela}>
      <Image
        style={styles.formatacaoEstrela}
        source={{ uri: estrelaPreenchida }}
      />
    </View>
  )
}

const Estrela_Metade = () => {
  return (
    <View style={styles.styleEstrela}>
      <Image
        style={styles.formatacaoEstrela}
        source={{ uri: estrelaMetade }}
      />
    </View>
  )
}

const Avalicao = () => {
  return (
    <View style={styles.styleAvalicao}>
      <Estrela_Prenchida />
      <Estrela_Prenchida />
      <Estrela_Prenchida />
      <Estrela_Prenchida />
      <Estrela_Metade />

      <View style={styles.styleAvalicao_Texto}>
        <Text style={styles.formatacaoAvalicaoTexto}>
          170 Review
        </Text>
      </View>
    </View>
  )
}

const ImagensIcones = () => {
  return (
    <View style={styles.styleIcone}>
      <Image
        style={styles.formatacaoImagemIcone}
        source={{ uri: iconeTrofeu }}
      />
      <Image
        style={styles.formatacaoImagemIcone}
        source={{ uri: iconeTorcedores }}
      />
      <Image
        style={styles.formatacaoImagemIcone}
        source={{ uri: iconeEstadio }}
      />
    </View>
  )
}

const TextoIcone = ({ text1, text2, text3 }) => {
  return (
    <View style={styles.styleTextoIcone}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Text>{text3}</Text>
    </View>
  )
}

const Inf = ({icone, titulo, valor}) => (
  <View style={{alignItems:"center"}}>
     <Image
        style={styles.formatacaoImagemIcone}
        source={{ uri: icone }}
      />
      <Text>{titulo}</Text>
      <Text>{valor}</Text>

  </View>
)

const Informacoes = () => {
  return (
    <View>
      <ImagensIcones />
      <TextoIcone text1='Troféus' text2='Torcedores' text3='Estádio' />
      <TextoIcone text1='115' text2='13.292.800' text3='São Januário' />
    </View>
  )
}

const Informacoes2 = () => {
  return (
    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
      <Inf icone= {iconeTrofeu} titulo = "Troféus" valor = {115} />
      <Inf icone= {iconeTrofeu} titulo = "Torcedor" valor = "São januario" />
      <Inf icone= {iconeTrofeu} titulo = "Troféus" valor = {115} />
    </View>
  )
}

export default App = () => {
  return (
    <View style={styles.containerTela}>
      <Imagem />
      <Titulo />
      <Texto />
      <Avalicao />
      <Informacoes2 />
    </View>
  )
}

const styles = StyleSheet.create = {
  containerTela: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  styleImagem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  formatacaoImagem: {
    width: 150,
    height: 110
  },
  styleTitulo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  formatacaoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  styleTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    padding: 10,
  },
  formatacaoTexto: {
    fontFamily: 'Arial',
    fontSize: 14,
  },
  styleEstrela: {
    padding: 2,
  },
  formatacaoEstrela: {
    width: 20,
    height: 20,
  },
  styleAvalicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  },
  formatacaoAvalicaoTexto: {
    fontWeight: 'bold',
  },
  styleAvalicao_Texto: {
    paddingLeft: 15,
  },
  styleIcone: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 25,
  },
  formatacaoImagemIcone: {
    width: 30,
    height: 30,
  },
  styleTextoIcone: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
  },
}
