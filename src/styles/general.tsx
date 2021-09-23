import styled from 'styled-components/native';
import {GeneralStyleProps} from '../typings/generalstyles';
import colors from './colors';

export const Container = styled.SafeAreaView<GeneralStyleProps>`
  flex: ${props => props.flex || 1};
  background-color: ${colors.whiteLight};
`;
