import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListView from './ListView.js';
import DetailView from './DetailView.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "List">
        <Stack.Screen name="List" component={ListView} />
        <Stack.Screen name="Detail" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// <NavigationContainer>: demonstra gerenciar o estado de navegação e vincular as rotas de navegações (Componente PAI)//
//<Stack.Navigator> : Informando que a navgação é realizada por meio do tipo stack(emplinhamento) de páginas//
// <Stac.Screen> : Demonstra que a leitura da navegação conforme as suas descrições, de nome e componente//