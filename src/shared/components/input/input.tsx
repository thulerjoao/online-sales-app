import { TextInputProps } from 'react-native/types';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { InputContainer } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
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
      <InputContainer {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;
