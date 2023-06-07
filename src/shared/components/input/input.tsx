import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { TextInputProps } from 'react-native/types';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { IconEye, InputContainer } from './input.style';
import { CpfMask, PhoneMask } from '../../functions/maskRegex';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  customMargin?: string;
  type?: 'phone' | 'cpf';
}

const Input = ({
  title,
  errorMessage,
  secureTextEntry,
  customMargin,
  type,
  onChange,
  ...props
}: InputProps) => {
  const [currentView, setCurrentView] = useState<boolean | undefined>(secureTextEntry);

  const handleChangeEye = () => {
    setCurrentView((current) => !current);
  };

  const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onChange) {
      let text = event.nativeEvent.text;
      switch (type) {
        case 'cpf':
          text = CpfMask(text);
          break;
        case 'phone':
          text = PhoneMask(text);
          break;
        default:
          text = event.nativeEvent.text;
          break;
      }
      onChange({
        ...event,
        nativeEvent: {
          ...event.nativeEvent,
          text,
        },
      });
    }
  };

  return (
    <DisplayFlexColumn customMargin={customMargin}>
      {title && (
        <Text
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLDE}
          color={theme.colors.greyTheme.gray100}
          marginCustom="0px 0px 4px 8px"
        >
          {title}
        </Text>
      )}
      <View>
        <InputContainer
          {...props}
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentView}
          errorMessage={errorMessage}
          onChange={handleOnChange}
        />
        {secureTextEntry && (
          <IconEye onPress={handleChangeEye} name={currentView ? 'eye' : 'eye-blocked'} size={20} />
        )}
      </View>
      {errorMessage && (
        <Text marginCustom="0px 0px 0px 8px" color={theme.colors.errorTheme.orange80}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
