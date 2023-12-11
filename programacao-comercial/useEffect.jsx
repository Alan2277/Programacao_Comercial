import { View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';

const url =
  'https://raw.githubusercontent.com/stepgalvao/iffood/main/nomes.json';

export default function App() {
  async function pegar() {
    const response = await fetch(url);
    if(response.status == 200){
    const content = await response.json();
    setItem(content);
  }

}

function adicionar () {
  setNum(num+1)

}

useEffect(()=>{pegar()
  console.log("Deu certo!")
}, [num])

  const [item, setItem] = useState({});
  const [num, setNum] = useState(0);
  return (
    <View style={{ flex:1, justifyContent: 'center', paddingHorizontal: 5 }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 6,
          padding: 5,
          
          
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Time: {item.nome}</Text>
          <Text style={{ fontWeight: 'bold' }}>Estado: {item.estado}</Text>
          <Text style={{ fontWeight: 'bold' }}>Divisão: {item.divisao}</Text>
          <Text>{num}</Text>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <Button title="Adicionar" onPress={adicionar} />
          
        </View>
      </View>
    </View>
  );
}
