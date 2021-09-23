import React from 'react';
import {Text} from 'react-native';
import {Container, Scroll} from '../../../styles/general';

const Profile: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Text>Profile</Text>
      </Scroll>
    </Container>
  );
};

export default Profile;
