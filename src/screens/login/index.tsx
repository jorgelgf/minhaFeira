import React from 'react'
import { BoxLogo, Container, TextDown, TextUp, BoxInput, ContainerInput, BoxButton, TextHelp, BoxHelp, TextButtonLink, TextLink } from './styles'
import { Logo, Input, Button } from '../../components'
import { Themes } from '../../themes/styles'
import { useNavigation } from '@react-navigation/native'
export const Login = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BoxLogo>
        <Logo />
      </BoxLogo>
      <TextUp>MINHA FEIRA</TextUp>
      <TextDown>Administração de compras</TextDown>
      <ContainerInput>
        <BoxInput>
          <Input icon='user' placeholder='Login' placeholderTextColor={Themes.colors.gray[300]} />
        </BoxInput>
        <BoxInput>
          <Input secureTextEntry={true} icon='eyeo' placeholder='Password' placeholderTextColor={Themes.colors.gray[300]} />
        </BoxInput>
      </ContainerInput>
      <BoxButton>
        <Button
          color={Themes.colors.white}
          backgroundColor={Themes.colors.purple[500]}
          onPress={() => navigation.navigate('Actions')}>ENTRAR</Button>
      </BoxButton>

      <BoxHelp style={{ marginTop: '5%' }}>
        <TextHelp>Esqueceu sua senha?</TextHelp>
        <TextButtonLink>
          <TextLink> Clique aqui</TextLink>
        </TextButtonLink>
      </BoxHelp>
      <BoxHelp>
        <TextHelp>Não possuí cadastro?</TextHelp>
        <TextButtonLink>
          <TextLink onPress={() => navigation.navigate('Register')}> Clique aqui</TextLink>
        </TextButtonLink>
      </BoxHelp>




    </Container>)
}