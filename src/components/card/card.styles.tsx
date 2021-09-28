import styled from 'styled-components/native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {GeneralStyleProps} from '../../typings/generalstyles';

export const CardContainer = styled.View<GeneralStyleProps>`
  width: ${props => props.width || '100'}%;
  height: ${props => props.height || 50}px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.grayRegular};
`;
