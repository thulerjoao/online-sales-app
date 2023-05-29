import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface InputProps {
  errorMessage?: string;
}

export const InputContainer = styled.TextInput<InputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.errorMessage ? theme.colors.errorTheme.orange80 : theme.colors.greyTheme.gray80};
`;
