import react from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ExibirAluno = ({matricula, nome, idade, curso}) => {
  return(
    <View style = {styles.contorno}>
      <Text><Text style = {styles.enunciado}>Matrícula:</Text> {matricula}</Text>
      <Text><Text style = {styles.enunciado}>Nome:</Text> {nome}</Text>
      <Text><Text style = {styles.enunciado}>Idade:</Text> {idade} anos</Text>
      <Text><Text style = {styles.enunciado}>Curso:</Text> {curso}</Text>
    </View>
  )
};

export default App = () => {
  return(
  <View style = {styles.fundo}>
    <Text style = {styles.titulo}>Alunos</Text>
    <ExibirAluno matricula="2020114LCOM635433" nome="José" idade={19} curso="Computação"/>
    <ExibirAluno matricula="2020114LCOM635439" nome="Maria" idade={20} curso="Informática"/>
  </View>
  )
};

const styles = StyleSheet.create = ({
  fundo: {
    flex:1,
    backgroundColor: '#5D8AA8',
  },

  contorno: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#B0E0E6',
  },
  enunciado: {
    fontWeight: 'bold',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  }
})
