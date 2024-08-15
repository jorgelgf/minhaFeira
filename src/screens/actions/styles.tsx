

import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const Container = styled.View`
 flex:1;
 background-color: ${Themes.colors.purple[100]};
 padding-left: 10%;
 padding-right: 10%;
`;

export const BoxLogo = styled.View`
 margin-top: 20%;
`;

export const TextUp = styled.Text`
 color: ${Themes.colors.purple[500]};
 margin-top: 5%;
 font-size: ${Themes.fontSize.xl};
 text-align: center;
`;

export const BoxButton = styled.View`
 align-items: center;
 margin-top:15%;
 gap:30px;
`;