import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListView from './ListView.js';
import DetailView from './DetailView.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={ListView} />
        <Stack.Screen name="Detalhes" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}