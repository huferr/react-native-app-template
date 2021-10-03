import React from 'react';
import {CardContainer, Header, Title} from './card.styles';
import {CardProps} from './card.types';

const Card: React.FC<CardProps> = props => {
  const {title, children} = props;

  return (
    <CardContainer {...props}>
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
