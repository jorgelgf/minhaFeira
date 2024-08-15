import { BoxLogo, BoxTotal, Container, TextRS, TextTotal, TextValue, BoxRefresh } from '../operations/styles';
import { Button, Logo } from '../../components';
import { Themes } from '../../themes/styles';
import React from 'react'

export const Operations = () => {

  return <Container>
    <BoxLogo>
      <Logo />
    </BoxLogo>
    <BoxTotal>
      <TextTotal>Total</TextTotal><TextRS>R$</TextRS>
      <TextValue>750.56</TextValue>
    </BoxTotal>
    <BoxRefresh>
      <Button
        color={Themes.colors.purple[500]}
        backgroundColor={Themes.colors.purple[100]}>ATUALIZAR</Button>
    </BoxRefresh>
  </Container>
}