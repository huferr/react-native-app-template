import React from 'react';
import {Body, Container} from './Modal.styles';
import {ModalProps} from 'react-native-modalbox';
import {View} from 'react-native';

const Modal: React.FC<ModalProps> = props => {
  const {children} = props;

  return (
    <View>
      <Container position="bottom" coverScreen swipeArea={40} isOpen>
        <Body>{children}</Body>
      </Container>
    </View>
  );
};

export default Modal;
