import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin}` : ``)}
`;

export const ButtonSecondary = styled(ButtonPrimary)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin}` : ``)};
  background-color: transparent;
  border: 1px solid ${theme.colors.mainTheme.primary};
`;

export const DisableButton = styled(ButtonPrimary)<ButtonContainerProps>`
  background-color: ${theme.colors.greyTheme.gray100};
`;

export const ButtonGradient = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${(props) => (props.margin ? `margin: ${props.margin}` : ``)}
`;
