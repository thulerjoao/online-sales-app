import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ButtonGradient, ButtonPrimary, ButtonSecondary, DisableButton } from './button.style';
import { buttonConst } from './__mocks__/buttonEnum';


interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disable?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, margin, type, disable, loading, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disable && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => {
    return (
      <>
        {loading ? (
          <ActivityIndicator
            testID={buttonConst.BUTTON_LOADING}
            color={theme.colors.neutralTheme.white}
          />
        ) : (
          <Text type={textTypes.BUTTON_SEMI_BOLDE} color={color}>
            {title}
          </Text>
        )}
      </>
    );
  };

  if (disable) {
    return (
      <DisableButton color={theme.colors.neutralTheme.white} margin={margin} {...props}>
        {renderText(theme.colors.neutralTheme.white)}
      </DisableButton>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );

    default:
      return (
        <ButtonPrimary margin={margin} {...props} onPress={handleOnPress}>
          <ButtonGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </ButtonGradient>
        </ButtonPrimary>
      );
  }
};

export default Button;
