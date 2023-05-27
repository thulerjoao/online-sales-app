import { TouchableOpacityProps } from 'react-native/types';

import { theme } from '../../themes/theme';
import Text from '../text/text';
import { ButtonContainer } from './button.style';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text type={textTypes.BUTTON_BOLDE} color={theme.colors.neutralTheme.white}>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
