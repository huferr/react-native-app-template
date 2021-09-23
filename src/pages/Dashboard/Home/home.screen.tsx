import React from 'react';
import {Text} from 'react-native';
import {Container} from '../../../styles/general';
import {Scroll} from './home.styles';

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
