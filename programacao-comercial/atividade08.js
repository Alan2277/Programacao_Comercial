import { DATA_BASE } from './banco';
import { Text, View, StyleSheet, Image } from 'react-native';

const imagem = 'https://logospng.org/download/ifood/logo-ifood-256.png';

const Items = ({ props }) => {
  return (
    <View style={styles.formatacaoItem}>
      <View style={styles.estiloImagem}>
        <Image style={styles.formatacaoImagem} source={{ uri: props.imagem }} />
      </View>

      <View style={styles.formatacaoView}>
        <View>
          <Text style={styles.estiloNome}>{props.nome}</Text>
        </View>

        <View style={styles.formatacaoDescricao}>
          <Text style={styles.estiloDescricao}>{props.descricao}</Text>
        </View>

        <View>
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
      <View style={styles.formatacaoViewPrincipal}>
        <View style={styles.estiloIcone}>
          <Image style={styles.formatacaoIcone} source={{ uri: imagem }} />
        </View>
        <View style={styles.formatacaoTitulo}>
          <Text style={styles.estiloTitulo}>Hambúrguer</Text>
        </View>
      </View>
      {lista}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formatacaoView: {
    flexDirection: 'column',
  },
  formatacaoViewPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formatacaoIcone: {
    width: 75,
    height: 75,
  },
  estiloIcone: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  formatacaoItem: {
    paddingHorizontal: 2,
    paddingBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFDAB9',
    flexDirection: 'row',
  },
  formatacaoImagem: {
    width: 85,
    height: 75,
  },
  estiloImagem: {
    paddingHorizontal: 10,
  },
  formatacaoTitulo: {
    paddingTop: 30,
  },
  estiloTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  estiloNome: {
    fontWeight: 'bold',
  },
  formatacaoDescricao: {
    maxWidth: 200,
  },
  estiloDescricao: {
    textAlign: 'justify',
    fontSize: 13,
  },
  estiloValor: {
    color: 'blue',
  },
});
