import React from 'react';
import {CardContainer, Header, Text, Title} from './card.styles';
import {CardProps} from './card.types';

const Card: React.FC<CardProps> = props => {
  const {title, text, children} = props;

  return (
    <CardContainer {...props}>
      {title && (
        <>
          <Header>
            <Title>{title}</Title>
          </Header>
        </>
      )}
      {text && <Text>{text}</Text>}
      {children}
    </CardContainer>
  );
};

export default Card;
