import { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default App = () => {
  const [avaliar, setAvaliar] = useState(0);

  const incremento = () => {
    setAvaliar(avaliar + 1);
  };
  return (
    <View style={styles.contanier}>
      <View style={styles.formatacaoViewPrincipal}>
        <Text style = {styles.estiloText}>{avaliar} Reviews</Text>
          <TouchableOpacity
            onPress={incremento}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/126/126473.png',
              }}
              style={styles.formatacaoImagem}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={incremento}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/4838/4838150.png',
              }}
              style={styles.formatacaoImagem}
            />
          </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 12,
  },

  formatacaoViewPrincipal: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center'
  },
  formatacaoImagem: {
    width: 30,
    height: 30,
  },
  estiloText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize:18
  }
});
