import react from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default App = () => {
  return(
    <View style = {styles.container}>
      <View style = {styles.figura}>
        <Image source= {{uri: 'https://cdn-icons-png.flaticon.com/128/3059/3059457.png'}}
          style = {{width: 20, height: 20}}/>
        <Image source= {{uri: 'https://cdn-icons-png.flaticon.com/128/2985/2985121.png'}}
          style = {{width: 20, height: 20}}/>
        <Image source= {{uri: 'https://cdn-icons-png.flaticon.com/128/3989/3989188.png'}}
          style = {{width: 20, height: 20}}/>
      </View>
      <View style = {styles.texto}>
        <Text>Call</Text>
        <Text>Router</Text>
        <Text>Share</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create = ({
  container: {
    flex:1,
    justifyContent: "center",
  },
  texto: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  figura: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }

})
