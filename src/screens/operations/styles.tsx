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

export const BoxTotal = styled.View`
 margin-top: 15%;
 width: 100%;
 flex-direction: row;
 align-items: center;
 gap: 15px;
`;

export const TextTotal = styled.Text`
 color:${Themes.colors.purple[500]};
 font-size: ${Themes.fontSize.md};
`;

export const TextRS = styled.Text`
 color:${Themes.colors.purple[500]};
 font-size: ${Themes.fontSize.xl};
`;

export const TextValue = styled.Text`
 color:${Themes.colors.purple[500]};
 font-size: ${Themes.fontSize.md};
 background-color: ${Themes.colors.gray[200]};
 padding:10px 15px 10px 15px;
 border-radius: 10px;
 text-align: center;
`;

export const BoxRefresh = styled.View`
margin-top: 15%;
`;
