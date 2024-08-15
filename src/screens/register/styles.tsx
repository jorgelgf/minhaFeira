

import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const Container = styled.ScrollView`
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

export const TextDown = styled.Text`
 color: ${Themes.colors.purple[500]};
 font-size: ${Themes.fontSize.xs};
`;

export const ContainerInput = styled.View`
 width: 100%;
 align-items: center;
 margin-top: 10%;
`;

export const BoxInput = styled.View`
 margin-top: 5%;
`;

export const BoxButton = styled.View`
 width: 100%;
 align-items: center;
 margin-top: 5%;
`;
export const BoxHelp = styled.View`
 align-items: center;
 justify-content: center;
 flex-direction: row;
 margin-top: 5%;
 margin-bottom: 15%;

`;
export const TextHelp = styled.Text`
 color:${Themes.colors.gray[300]};
 font-size: ${Themes.fontSize.sm};
 margin-top: 5%;
 height: 100%;
 align-items: center;
 justify-content: center;
`;

export const TextButtonLink = styled.TouchableOpacity`
 align-items:center;
 justify-content: center;
 margin:0;
 padding:0;
 
 `;

export const TextLink = styled.Text`
 color:${Themes.colors.purple[500]};
 font-size: ${Themes.fontSize.sm};
`;


