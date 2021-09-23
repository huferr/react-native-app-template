import styled from 'styled-components/native';
import {GeneralStyleProps} from '../typings/generalstyles';
import colors from './colors';
import metrics from './metrics';

export const Container = styled.SafeAreaView<GeneralStyleProps>`
  flex: ${props => props.flex || 1};
  background-color: ${colors.whiteLight};
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  padding: 0 ${metrics.basePadding}px;
`;
