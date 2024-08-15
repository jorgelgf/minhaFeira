import React from "react";
import logo from "../../assets/image-logo.png";
import { Container, Img, } from './styles';
export const Logo = () => {
  return (
    <Container>
      <Img source={logo} alt='minha logo' />
    </Container>
  )
}