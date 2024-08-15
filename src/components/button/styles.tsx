
import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const ButtonNative = styled.TouchableOpacity`
 width: 100%;
 padding: 20px;
 border-radius: 15px;
 border:solid ${Themes.colors.purple[500]} 1px;
`;

export const TextButton = styled.Text`
 text-align: center;
 font-size:${Themes.fontSize.md};
 
`;