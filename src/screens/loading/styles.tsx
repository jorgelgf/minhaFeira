

import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const Container = styled.View`
flex:1;
background-color: ${Themes.colors.purple[300]};
align-items: center;
`;
export const BoxImage = styled.View`
margin-top: 30%;
margin-bottom: 30px;
`;


export const TextUp = styled.Text`
color: ${Themes.colors.purple[100]};
font-size: ${Themes.fontSize.xl};
`;

export const TextDown = styled.Text`
color: ${Themes.colors.purple[100]};
font-size: ${Themes.fontSize.xs};
`;

export const BoxButton = styled.View`
  margin-top: 30%;
`;
