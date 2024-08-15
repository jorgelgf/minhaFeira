

import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';


export const Container = styled.View`
width: 100%;
align-items: center;
flex-direction: row;
`;

export const BoxIcon = styled.View`
position: absolute;
bottom:35%;
left: 5%;
z-index: 1;
`;

export const InputNative = styled.TextInput`
 background-color: ${Themes.colors.gray[200]};
 font-size: ${Themes.fontSize.md};
 width: 100%;
 border-radius: 15px;
 padding: 20px 20px 20px 55px; 
 color: ${Themes.colors.purple[500]};
`
