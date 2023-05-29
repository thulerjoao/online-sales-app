import { TextInputProps } from 'react-native/types';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { InputContainer } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ title, errorMessage, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLDE}
          color={theme.colors.greyTheme.gray100}
          marginCustom="0px 0px 4px 8px"
        >
          {title}
        </Text>
      )}
      <InputContainer errorMessage={errorMessage} {...props} />
      {errorMessage && (
        <Text marginCustom="0px 0px 0px 8px" color={theme.colors.errorTheme.orange80}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
