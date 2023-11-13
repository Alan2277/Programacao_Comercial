import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DATA_BASE } from './datacenter.js';
import ListView from './ListView.js';
import DetailView from './DetailView.js';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Lista" component = {ListView}/>
        <Stack.Screen name = "Detalhes" component={DetailView}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  formatacaoImage: {
    width: 75,
    height: 75,
  }
})
