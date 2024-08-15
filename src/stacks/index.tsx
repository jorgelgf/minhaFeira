
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Actions, Loading, Login, Register } from '../screens';
import { Operations } from '../screens/operations';

type RootStackParamList = {
  Login: undefined;
  Loading: undefined;
  Tabs: Component;
  Register: Component;
  Operations: Component;
  Actions: Component;
};
export const MainStacks = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Operations" component={Operations} />
      <Stack.Screen name="Actions" component={Actions} />


    </Stack.Navigator>
  )
}