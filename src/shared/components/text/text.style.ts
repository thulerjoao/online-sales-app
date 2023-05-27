import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
}

export const TextContainer = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color}` : ``)}
  font-size: ${(props) => props.fontSize}
`;
