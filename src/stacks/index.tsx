
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loading, Login } from '../screens';

type RootStackParamList = {
  Login: undefined;
  Loading: undefined;
  Tabs: Component;
};
export const MainStacks = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
  )
}