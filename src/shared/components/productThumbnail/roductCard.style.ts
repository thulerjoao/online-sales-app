import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

interface ContainerProps {
  margin?: string;
}

export const ContainerProductCard = styled.TouchableOpacity<ContainerProps>`
  width: 120px;
  border-radius: 6px;
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

export const InsertButton = styled.TouchableOpacity ` 
    width: 100%;
    height: 30px;
    background-color: ${theme.colors.mainTheme.primary};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`