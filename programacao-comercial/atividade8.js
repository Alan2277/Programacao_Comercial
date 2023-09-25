import { DATA_BASE } from './banco';
import { Text, View, StyleSheet, Image } from 'react-native';

const Items = ({ props }) => {
  return (
    <View style={styles.formatacaoItem}>
      <View style={styles.estiloImagem}>
        <Image style={styles.formatacaoImagem} source={{ uri: props.imagem }} />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.formatacaoNome}>
          <Text style={styles.estiloNome}>{props.nome}</Text>
        </View>
        <View style={styles.formatacaoDescricao}>
          <Text 

           style={styles.estiloDescricao}>{props.descricao}</Text>
        </View>
        <View style={styles.formatacaoValor}>
          <Text style={styles.estiloValor}>R$ {props.valor.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default App = () => {
  const lista = [];
  for (const item of DATA_BASE) {
    lista.push(<Items props={item} />);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formatacaoTitulo}>
        <Text style={styles.estiloTitulo}>Minha Loja</Text>
      </View>
      {lista}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  formatacaoItem: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  formatacaoImagem: {
    width: 75,
    height: 75,
  },
  estiloImagem: {
    paddingHorizontal: 5,
  },
  formatacaoTitulo: {
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  estiloTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  formatacaoNome: {},
  estiloNome: {},
  formatacaoDescricao: {
    maxWidth: 200,
  },
  estiloDescricao: {},
  formatacaoValor: {},
  estiloValor: {},
});
