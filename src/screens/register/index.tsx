
import React from 'react';
import { BoxButton, BoxHelp, BoxInput, BoxLogo, Container, ContainerInput, TextButtonLink, TextHelp, TextLink, TextUp } from './styles';
import { Button, Input, Logo } from '../../components';
import { data } from '../../utils/infoRegister';
import { Themes } from '../../themes/styles';
import { useNavigation } from '@react-navigation/native';
export const Register = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BoxLogo>
        <Logo />
      </BoxLogo>
      <TextUp>CADASTRO</TextUp>
      <ContainerInput>
        {data.map((info) => {
          return (<>
            <BoxInput>
              {info.id > 2 ?
                (<Input secureTextEntry={true}
                  placeholder={info.info}
                  placeholderTextColor={Themes.colors.gray[300]} />) :
                <Input placeholder={info.info}
                  placeholderTextColor={Themes.colors.gray[300]} />
              }
            </BoxInput>
          </>)

        })}
      </ContainerInput>
      <BoxButton>
        <Button
          color={Themes.colors.white}
          backgroundColor={Themes.colors.purple[500]}>CADASTRAR</Button>
      </BoxButton>
      <BoxHelp>
        <TextHelp>Não possuí cadastro?</TextHelp>
        <TextButtonLink>
          <TextLink onPress={() => navigation.navigate('Login')}> Clique aqui</TextLink>
        </TextButtonLink>
      </BoxHelp>
    </Container>
  )
}