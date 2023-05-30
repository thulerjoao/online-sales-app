import styled from 'styled-components/native';

import { theme } from '../../../shared/themes/theme';

export const LoginContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 150px;
  margin-bottom: 20px;
`;
