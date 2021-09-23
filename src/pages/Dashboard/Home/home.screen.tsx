import React from 'react';
import {Text} from 'react-native';
import {Container, Scroll} from '../../../styles/general';

const Home: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Text>Home</Text>
      </Scroll>
    </Container>
  );
};

export default Home;
