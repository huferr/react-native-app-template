import React, {useState} from 'react';
import {Text} from 'react-native';
import Card from '../../../components/card/card.component';
import Modal from '../../../components/Modal/Modal.component';
import {Container, Scroll} from '../../../styles/general';
import {Title, UserName} from './home.styles';

const Home: React.FC = () => {
  const [userName, setUserName] = useState('Hugo');
  const [OpenModal, setOpenModal] = useState(true);
  return (
    <>
      <Container>
        <Scroll>
          <Title>
            Welcome to app template, <UserName>{userName}!</UserName>
          </Title>
          <Card
            title="Card #1"
            text="Clique neste card para saber mais sobre o App template"
            marginBottom={20}
          />
          <Card title="Card #2" marginBottom={20} />
          <Card title="Card #3" marginBottom={20} />
          <Card title="Card #3" marginBottom={20} />
        </Scroll>
      </Container>
      {OpenModal && (
        <Modal>
          <Text>dasdasdasdsa</Text>
          <Text>dasdasdasdsa</Text>
          <Text>dasdasdasdsa</Text>
          <Text>dasdasdasdsa</Text>
        </Modal>
      )}
    </>
  );
};

export default Home;
