import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  marginCustom?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-SemiBold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const TextContainer = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color}` : ``)}
  ${(props) => (props.marginCustom ? `margin: ${props.marginCustom}` : ``)}
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
`;
