import {Text, View, StyleSheet,Image} from 'react-native';

const alunos = [
  {nome: 'Abner', media: 8},
  {nome: 'Alan', media: 7.5},
  {nome: 'Eliene' , media: 6 },
  {nome: 'Francisco' , media: 8.5 },
  {nome: 'André' , media: 5.5 },
]

const imagem = 'https://sites.ifpi.edu.br/lapesi/images/ifpilogo.png';

const ListaItems = ({props}) => {
  return(
    <View style = {styles.estiloAlunos}>
      <View>
        <Text><Text style = {styles.formatacaoItems}>Nome:</Text> <Text>{props.nome}</Text></Text>
      </View>

      <View>
        <Text><Text style = {styles.formatacaoItems}>Média:</Text> <Text>{props.media}</Text></Text>
      </View>
    </View>
  )
}

const Imagem = () => {
  return(
    <View style = {styles.estiloImagem}>
      <Image
        style = {styles.formatacaoImagem}
        source = {{uri: imagem}}
      />
    </View>
  )
}

export default App = () => {
  const lista = []
  for (const aluno of alunos){
    lista.push(<ListaItems props = {aluno}/>)
  }

  return(
    <View style = {styles.container}>
      <Imagem/>
      <View style = {styles.estiloTexto}>
        <Text style = {styles.formatacaoTexto}>Lista de Alunos</Text>
      </View>
      {lista}
    </View>
  )
}


const styles = StyleSheet.create = {
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
},
  estiloTexto: {
    alignItems: 'center',
    padding: 10,
  },
  formatacaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'

  },
  estiloAlunos: {
    paddingBottom: 10,
    paddingLeft: 5,
  },
  formatacaoItems: {
     fontSize: 16,
     fontWeight: 'bold'
  },
  estiloImagem: {
    padding:30
  },
  formatacaoImagem:{
    height: 80,
    weight: 80
  },
}
