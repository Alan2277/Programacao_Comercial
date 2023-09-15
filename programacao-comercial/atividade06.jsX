import { useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

const imagemIFPI =
  'https://pbs.twimg.com/profile_images/438771627854024704/Az4OY07a_400x400.png';

export default App = () => {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificacaoLogin = () => {
    if (user === 'IFPI' && senha === '123') {
      setMensagem('ACESSO LIBERADO');
    } else {
      setMensagem('ACESSO NEGADO');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.estiloImagem}>
        <Image style={styles.formatacaoImagem} source={{ uri: imagemIFPI }} />
      </View>

      <View>
        <TextInput
          style={styles.estiloInput}
          placeholder="Usuário"
          onChangeText={(text) => setUser(text)}
        />
        <View style={styles.preenchimentoInput}>
          <TextInput
            style={styles.estiloInput}
            placeholder="Senha"
            onChangeText={(text) => setSenha(text)}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.estiloBotao}>
        <Button title="Login" onPress={verificacaoLogin} />
      </View>

      <View style={styles.estiloInformacao}>
        <Text>
          Não possui conta?
          <Text style={styles.textoInformacao}> Inscreva-se</Text>
        </Text>
      </View>

      <View style={styles.estiloAlerta}>
        <Text style={styles.textoAlerta}>{mensagem}</Text>
      </View>
    </View>
  );
};

const styles = (StyleSheet.create = {
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingHorizontal: 15,
  },
  estiloImagem: {
    alignItems: 'center',
    padding: 15,
  },
  formatacaoImagem: {
    width: 70,
    height: 70,
  },
  estiloInput: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  preenchimentoInput: {
    paddingTop: 10,
  },
  estiloBotao: {
    paddingTop: 30,
  },
  estiloInformacao: {
    alignItems: 'flex-end',
  },
  textoInformacao: {
    color: 'blue',
    fontWeight: 'bold',
  },
  estiloAlerta: {
    alignItems: 'center',
    paddingTop: 29,
  },
  textoAlerta: {
    color: 'green',
    fontWeight: 'bold',
  },
});
