import styled from 'styled-components/native';

interface ViewProps {
  customMargin?: string;
}

export const DisplayFlexColumn = styled.View<ViewProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props) => (props.customMargin ? `margin: ${props.customMargin}` : ``)}
`;