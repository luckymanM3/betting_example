import styled from "styled-components";

interface InputComponentProps {
  width?: string,
}

export const InputComponent = styled.input<InputComponentProps>`
  width: ${props => props.width ? props.width : '100%'};
  padding: 10px;
  margin: 0;
  outline: none;
  border: 2px solid rgb(47 69 83);
  outline: 2px solid transparent;
  transition-duration: .2s;
  outline-offset: 2px;
  &:focus, &:hover {
    border-color: rgb(85 112 134)
  }
`;
