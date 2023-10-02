import { useState } from 'react';
import {Text, View, Image, TextInput, Button, StyleSheet, FlatList} from 'react-native';

const imagemIcone = 'https://logospng.org/download/ifood/logo-ifood-256.png';

const ListaItem = ({ item }) => {
  return (
    <View style={styles.formatacaoItem}>
      <View style={styles.estiloImagem}>
        <Image style={styles.formatacaoImagem} source={{ uri: item.linkImg }} />
      </View>

      <View style={styles.formatacaoView}>
        <View>
          <Text style={styles.estiloNome}>{item.nome}</Text>
        </View>

        <View style={styles.formatacaoDescricao}>
          <Text style={styles.estiloDescricao}>{item.descricao}</Text>
        </View>

        <View>
          <Text style={styles.estiloValor}>R$ {item.valor}</Text>
        </View>
      </View>
    </View>
  );
};

export default App = () => {
  const [lista, setLista] = useState([]);

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [linkImg, setLinkImg] = useState('');
  const [descricao, setDescricao] = useState('');

  const addHamburguer = () => {
    const descricaoHumburguer = {
      nome: nome,
      valor: valor,
      linkImg: linkImg,
      descricao: descricao,
    };

    const novaLista = [...lista, descricaoHumburguer];

    setLista(novaLista);
    console.log(lista);
  };

  const onChangeTextInputNome = (nome) => {
    setNome(nome);
  };

  const onChangeTextInputValor = (valor) => {
    setValor(valor);
  };

  const onChangeTextInputLinkImg = (linkImg) => {
    setLinkImg(linkImg);
  };

  const onChangeTextInputDescricao = (descricao) => {
    setDescricao(descricao);
  };
  return (
    <View style={styles.container}>
      <View style={styles.estiloIcone}>
        <Image
          style={styles.formatacaoIcone}
          source={{
            uri: imagemIcone,
          }}
        />
      </View>

      <View style={styles.formatacaolayout}>
        <View style={styles.formatacaoTitulo}>
          <Text style={styles.estiloTitulo}>Cadastro de Hamburguêr</Text>
        </View>

        <View>
          <TextInput
            placeholder="Digite o nome"
            style={styles.formatoTextInput}
            onChangeText={onChangeTextInputNome}
          />
          <TextInput
            placeholder="Digite o valor"
            style={styles.formatoTextInput}
            onChangeText={onChangeTextInputValor}
          />
          <TextInput
            placeholder="Informe o link da imagem"
            style={styles.formatoTextInput}
            onChangeText={onChangeTextInputLinkImg}
          />
          <TextInput
            placeholder="Digite a descrção"
            style={styles.formatoTextInput}
            onChangeText={onChangeTextInputDescricao}
          />
        </View>

        <View style={styles.formatacaoButton}>
          <Button title="Inserir" onPress={addHamburguer} />
        </View>
      </View>

      <FlatList data={lista} renderItem={ListaItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  formatacaoIcone: {
    width: 75,
    height: 75,
  },
  estiloIcone: {
    alignItems: 'center',
  },
  formatacaolayout: {
    borderWidth: 1,
    padding: 12,
    borderColor: 'rgba(0, 0, 0, .1)',
    paddingHorizontal: 17,
  },
  formatacaoTitulo: {
    alignItems: 'center',
    padding: 10,
  },
  estiloTitulo: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  formatoTextInput: {
    borderBottomWidth: 1,
    paddingHorizontal: 1,
    paddingVertical: 15,
  },
  formatacaoButton: {
    paddingTop: 15,
  },
  formatacaoItem: {
    paddingHorizontal: 2,
    paddingBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFDAB9',
    flexDirection: 'row',
  },
  estiloImagem: {
    paddingHorizontal: 10,
  },
  formatacaoImagem: {
    width: 85,
    height: 75,
  },
  formatacaoView: {
    flexDirection: 'column',
  },
  estiloNome: {
    fontWeight: 'bold',
  },
  formatacaoDescricao: {
    maxWidth: 190,
  },
  estiloDescricao: {
    textAlign: 'justify',
    fontSize: 13,
  },
  estiloValor: {
    color: 'blue',
  },
});
