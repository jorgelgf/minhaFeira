import React from 'react'
import { ButtonNative, TextButton } from './styles'
interface PropsButton {
  children: string;
  backgroundColor: string;
  color: string;
  onPress?: () => void;
}
export const Button = ({ color, children, backgroundColor, onPress }: PropsButton) => {
  return (
    <ButtonNative style={{ backgroundColor: backgroundColor }}>
      <TextButton style={{ color: color }} onPress={onPress}>
        {children}
      </TextButton>
    </ButtonNative>
  )
}