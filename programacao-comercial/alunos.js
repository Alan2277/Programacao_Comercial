import react from 'react';
import {Text, View, StyleSheet} from 'react-native';


const ExibirAlunos = ({nome, curso, disciplina}) =>{
  return(
    <View style = {styles.container}>
      <Text><Text style = {styles.enunciado}>Nome:</Text> {nome}</Text>
      <Text><Text style = {styles.enunciado}>Curso:</Text> {curso}</Text>
      <Text><Text style = {styles.enunciado}>Disciplina:</Text> {disciplina}</Text>
    </View>
  )
}


export default App = () => {
  return(
    <View style = {styles.contorno}>
      <Text style = {styles.title}>Alunos</Text>
      <ExibirAlunos nome="Alan" curso="Computação" disciplina="Porgramação Comercial"/>
      <ExibirAlunos nome="Alexandre" curso="Informática" disciplina="Programação Orientada a Objeto"/>
      <ExibirAlunos nome="Sampaio" curso="Informática" disciplina="Estrutura de Dados"/>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    margin: 5,
    borderWidth: 'thin',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#cfe7f5',

  },
  enunciado: {
    fontWeight: 'bold',

  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff4000',
    textAlign: 'center',
    padding: 15,
  },
  contorno: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    borderWidth: 7,
    borderStyle: 'inset',
    borderColor: '#A9A9A9',

  }
});
