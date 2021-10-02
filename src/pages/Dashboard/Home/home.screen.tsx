import React, {useState} from 'react';
import Card from '../../../components/card/card.component';
import {Container, Scroll} from '../../../styles/general';
import {Title} from './home.styles';

const Home: React.FC = () => {
  const [userName, setUserName] = useState('Hugo');
  return (
    <Container>
      <Scroll>
        <Title>Welcome to app template, {userName}!</Title>
        <Card height={100} title="testando" />
      </Scroll>
    </Container>
  );
};

export default Home;
