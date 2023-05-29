import { TouchableOpacityProps } from 'react-native/types';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '../../themes/theme';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ButtonGradient, ButtonPrimary, ButtonSecondary } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_BOLDE} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );

    default:
      return (
        <ButtonPrimary margin={margin} {...props}>
          <ButtonGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text type={textTypes.BUTTON_BOLDE} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </ButtonGradient>
        </ButtonPrimary>
      );
  }
};

export default Button;
