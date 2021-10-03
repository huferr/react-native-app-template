import styled from 'styled-components/native';
import metrics from '../../styles/metrics';
import {GeneralStyleProps} from '../../typings/generalstyles';

export const CardContainer = styled.View<GeneralStyleProps>`
  width: ${props => props.width || '100'}%;
  height: ${props => props.height || 50}px;
  border-radius: ${metrics.baseRadius}px;
  background-color: #ca4090;
`;

export const Header = styled.View`
  width: 100%;
  height: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
`;
