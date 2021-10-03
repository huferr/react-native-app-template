import styled, {css} from 'styled-components/native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import {CardProps} from './card.types';

export const CardContainer = styled.View<CardProps>`
  border-radius: ${metrics.baseRadius}px;
  background-color: #ca4090;
  padding: 20px;
`;

export const Header = styled.View`
  width: 100%;
  height: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.white};
`;

export const Text = styled.Text<CardProps>`
  font-size: 20px;
  color: ${colors.white};
  ${props =>
    !props.text &&
    css`
      margin-top: 10px;
    `}
`;
