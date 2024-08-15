import React from 'react';
import { BoxButton, BoxLogo, Container, TextUp } from './styles';
import { Button, Logo } from '../../components';
import { Themes } from '../../themes/styles';
import { useNavigation } from '@react-navigation/native';


export const Actions = () => {
  const navigation = useNavigation();
  return (
    <Container>

      <BoxLogo>
        <Logo />
      </BoxLogo>
      <TextUp>O QUE DESEJA FAZER?</TextUp>
      <BoxButton>
        <Button
          onPress={() => navigation.navigate('Operations')}
          color={Themes.colors.white}
          backgroundColor={Themes.colors.purple[500]}>+ NOVA LISTA</Button>
        <Button
          color={Themes.colors.white}
          backgroundColor={Themes.colors.purple[500]}>LISTA ANTERIOR</Button>
      </BoxButton>
    </Container>
  )


}