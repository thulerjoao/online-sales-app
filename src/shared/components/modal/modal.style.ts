import styled from 'styled-components/native';

import { theme } from '../../themes/theme';
import { Icon } from '../icons/icons';

export const ModalContainer = styled.View`
  position: absolute;
  background-color: ${theme.colors.neutralTheme.white};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  width: 100%;
  padding: 18px;
  padding-bottom: 50px;
  z-index: 9;
  bottom: 0px;
  elevation: 5;
  shadow-color: #000000;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-offset: 0px 2px;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  z-index: 10;
  right: 24px;
  top: 24px;
`;
