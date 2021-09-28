import React from 'react';
import {Text} from 'react-native';
import Card from '../../../components/card/card.component';
import {Container, Scroll} from '../../../styles/general';

const Home: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Text>Home</Text>
        <Card height={100}>
          <Text>dsadsad</Text>
          <Text>dsadsad</Text>
        </Card>
      </Scroll>
    </Container>
  );
};

export default Home;
