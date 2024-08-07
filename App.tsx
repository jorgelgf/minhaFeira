
import React from 'react';
import { Themes } from './src/themes/styles';
import { StatusBar } from 'react-native';
import { MainStacks } from './src/stacks';
import { NavigationContainer } from '@react-navigation/native';

function App() {


  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Themes.colors.purple[300]} />
      <MainStacks />
    </NavigationContainer>
  );
}


export default App;
