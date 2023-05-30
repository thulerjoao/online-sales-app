import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import { theme } from '../../themes/theme';
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { CloseIcon, ModalContainer } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ModalContainer>
        <CloseIcon name="cross" onPress={() => onCloseModal()} />
        <Text type={textTypes.PARAGRAPH_SEMI_BOLDE} color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Button title="ok" onPress={() => onCloseModal()} />
      </ModalContainer>
    </ModalReact>
  );
};

export default Modal;
