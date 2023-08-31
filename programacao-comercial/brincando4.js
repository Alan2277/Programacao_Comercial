import react from 'react';
import {View, StyleSheet} from 'react-native';


export default App = () => {
  return(
    <View style = {styles.container}>

      <View style = {styles.box1}/>
      <View style = {styles.box2}/>
      <View style = {styles.box3}/>

    
    </View>
  )
}

const styles = StyleSheet.create = ({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  box1: {
    width: 70, 
    height: 70, 
    backgroundColor: 'red'
  },
  box2: {
    width: 70, 
    height: 70, 
    backgroundColor: 'yellow'
  },
  box3: {
    width: 70, 
    height: 70, 
    backgroundColor: 'green'
  }

})
