
import React from 'react'
import { Container, InputNative, BoxIcon } from './styles'
interface InputProps {
  placeholder: string;
  placeholderTextColor: string;
  icon?: string;
  secureTextEntry?: boolean;
}

import User from 'react-native-vector-icons/AntDesign';
import { Themes } from '../../themes/styles';

export const Input = ({ placeholder, placeholderTextColor, icon, secureTextEntry }: InputProps) => {
  return (<Container>
    <BoxIcon>
      <User name={icon} size={18} color={Themes.colors.gray[300]} />
    </BoxIcon>
    <InputNative
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor} />
  </Container>
  )
}