import React from 'react';
import {Text} from 'react-native';
import {Container, Scroll} from '../../../styles/general';

const Informations: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Text>Informações</Text>
      </Scroll>
    </Container>
  );
};

export default Informations;
