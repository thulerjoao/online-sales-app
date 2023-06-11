import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

interface ContainerProps {
  margin?: string;
}

export const ContainerProductThumbnail = styled.TouchableOpacity<ContainerProps>`
  height: 200px;
  width: 120px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.greyTheme.gray80};
  margin: ${(props) => props.margin || '0px'};
  padding: 8px;
`;

export const ProductImage = styled.Image`
  border-radius: 4px;
  width: 100%;
  height: 70px;
  background-color: black;
  margin-bottom: 8px;
`;
