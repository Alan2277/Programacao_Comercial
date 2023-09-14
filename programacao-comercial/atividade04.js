import {Text, View, StyleSheet, Image} from 'react-native';

const Icone = ({nome, url}) =>{
  return(
    <View style = {styles.espacamento}>
      <View style = {styles.preenchimento}>
        <Image
          style = {styles.figura}
          source = {{uri: url}}
        />
      </View>
      <Text>{nome}</Text>
    </View>
  )
}


export default App = () => {
  return(
    <View style = {styles.container}>
        <Icone nome="Call" url="https://cdn-icons-png.flaticon.com/128/3059/3059457.png"/>
        <Icone nome="Router" url="https://cdn-icons-png.flaticon.com/128/2985/2985121.png"/>
        <Icone nome="Share" url="https://cdn-icons-png.flaticon.com/128/3989/3989188.png"/>
    </View>
  )
}

const styles = StyleSheet.create = ({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
  },
  figura: {
    width: 20,
    height:20,
    flexDirection: 'row',
  },
  espacamento: {
    alignItems: 'center',
  },
  preenchimento: {
    padding: 10,
  }


})
