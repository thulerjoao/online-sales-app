import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';

import { theme } from '../../themes/theme';
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { CloseIcon, ModalContainer } from './modal.style';
import { modalTestId } from './__mocks__/mosal.testId';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact animationType="slide" transparent={true} onRequestClose={onCloseModal} {...props}>
      <ModalContainer>
        <CloseIcon testID={modalTestId.MODAL_CLOSE_ICON} name="cross" onPress={() => onCloseModal()} />
        <Text
          testID={modalTestId.MODAL_TITLE}
          type={textTypes.PARAGRAPH_SEMI_BOLDE}
          color={theme.colors.mainTheme.primary}
        >
          {title}
        </Text>
        <Text
          testID={modalTestId.MODAL_TEXT}
          type={textTypes.PARAGRAPH_SEMI_BOLDE}
          color={theme.colors.greyTheme.gray80}
        >
          {text}
        </Text>
        <Button testID={modalTestId.MODAL_CLOSE_BUTTON} title="ok" onPress={() => onCloseModal()} />
      </ModalContainer>
    </ModalReact>
  );
};

export default Modal;
