import React from 'react';
import {CardContainer} from './card.styles';

const Card: React.FC<CardProps> = props => {
  const {width, height, children} = props;

  return (
    <CardContainer width={width} height={height}>
      {children}
    </CardContainer>
  );
};

export default Card;
