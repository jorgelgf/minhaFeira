import React, { useEffect } from 'react'

import { BoxButton, BoxImage, Container, TextDown, TextUp } from './styles'
import { Logo } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
export const Loading = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const time = () => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
    time();

  })

  return (
    <Container>
      <BoxImage>
        <Logo />
      </BoxImage>
      <TextUp>MINHA FEIRA</TextUp>
      <TextDown>Administração de compras</TextDown>

      <BoxButton>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <TextDown> {'>>'} Clique aqui para ir para tela de login</TextDown>
        </TouchableOpacity>
      </BoxButton>
    </Container>
  )
}

