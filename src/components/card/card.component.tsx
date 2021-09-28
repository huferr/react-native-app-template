import React from 'react';
import {CardContainer, Header, Title} from './card.styles';

const Card: React.FC<CardProps> = props => {
  const {width, height, title, children} = props;

  return (
    <CardContainer width={width} height={height}>
      {title && (
        <>
          <Header>
            <Title>{title}</Title>
          </Header>
        </>
      )}

      {children}
    </CardContainer>
  );
};

export default Card;
