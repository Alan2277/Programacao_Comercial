import {Text, View, StyleSheet, Image} from 'react-native';
const estrelaPreenchida = 'https://cdn-icons-png.flaticon.com/128/118/118669.png';
const estrelaMetade = 'https://cdn-icons-png.flaticon.com/128/25/25662.png'; 
const iconeTrofeu = 'https://cdn-icons-png.flaticon.com/128/7466/7466210.png';
const iconeTorcedores = 'https://cdn-icons-png.flaticon.com/128/74/74577.png';
const iconeEstadio = 'https://cdn-icons-png.flaticon.com/128/53/53213.png';


export default App = () => {
  return(
    <View style = {{flex:1, }}>
      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Image
          style = {{width: 150, height: 110}}
          source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vasco_da_Gama2.png'}}
        />
      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
        <Text style = {{fontSize: 20, fontWeight: 'bold', }}>
          Vasco da Gama
        </Text>
      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', padding: 10,}}>
        <Text style = {{fontFamily: 'Arial'}}>
          O Vasco tem uma história rica e conquistou muitos títulos importantes ao longo dos anos, incluindo campeonatos nacionais e estaduais, bem como competições internacionais. 
        </Text>
      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style = {{padding: 2}}>
        <Image
          style = {{width: 20, height: 20}}
          source = {{uri: estrelaPreenchida}}
        />
        </View>
        <View style = {{padding: 2}}>
        <Image
          style = {{width: 20, height: 20}}
          source = {{uri: estrelaPreenchida}}
        />
        </View>
        <View style = {{padding: 2}}>
        <Image
          style = {{width: 20, height: 20}}
          source = {{uri: estrelaPreenchida}}
        />
        </View>
        <View style = {{padding: 2}}>
        <Image
          style = {{width: 20, height: 20}}
          source = {{uri: estrelaPreenchida}}
        />
        </View>
        <View style = {{padding: 2}}>
        <Image
          style = {{width: 20, height: 20}}
          source = {{uri: estrelaMetade}}
        />
        </View>
        <View  style = {{paddingLeft:20}}>
        <Text style = {{fontWeight: 'bold'}}>
          170 Review
        </Text>
        </View>
      </View>

      <View >
        <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 40 }}>
          <Image
            style = {{width: 30, height: 30,}}
            source = {{uri: iconeTrofeu}}
          />
          <Image
            style = {{width: 30, height: 30,}}
            source = {{uri: iconeTorcedores}}
          />
          <Image
            style = {{width: 30, height: 30,}}
            source = {{uri: iconeEstadio}}
          />
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10}}>
          <Text>Troféus</Text>
          <Text>Torcedores</Text>
          <Text>Estádio</Text>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, padding: 10}}>
        <Text>115</Text>
        <Text>13.292.800</Text>
        <Text>São Januário</Text>
      </View>
      </View>

    </View>

  )
}
