import {Text, View, StyleSheet} from 'react-native';

const alunos = [
      {nome: 'JOSÉ', media: 4.9 },
      {nome: 'ANTONIO', media: 7.0 },
      {nome: 'ALEXANDRE', media: 8.0 },
      {nome: 'SAMPAIO', media:10.0 },
      {nome: 'ALAN', media:9.0 },
  ]


const ListaItems = ({valor}) => (
  <View>
    <View>
      <Text>Nome: <Text>{valor.nome}</Text></Text>
    </View>
    <View>
      <Text>Media: <Text>{valor.media}</Text></Text>
    </View>
  </View>
)




export default App = () => {
  const lista = [];
  for (const aluno of alunos){
    lista.push(<ListaItems valor = {aluno}/>)
  }
  return(
    <View style = {styles.container}>
      <Text style = {styles.estiloTitulo}>Minha Lista</Text>
      {lista}
    </View>
  );
}


const styles = StyleSheet.create = {
  container: {
    flex: 1,

  },
  estiloTitulo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
}

