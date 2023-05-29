import { useState } from 'react';
import { View } from 'react-native';
import { TextInputProps } from 'react-native/types';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { IconEye, InputContainer } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  customMargin?: string;
}

const Input = ({ title, errorMessage, secureTextEntry, customMargin, ...props }: InputProps) => {
  const [currentView, setCurrentView] = useState<boolean | undefined>(secureTextEntry);

  const handleChangeEye = () => {
    setCurrentView((current) => !current);
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
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentView}
          errorMessage={errorMessage}
          {...props}
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
