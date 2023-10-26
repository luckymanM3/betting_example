import styled from "styled-components";

interface SelectComponentProps {
  width?: string,
  background?: string,
}

export const SelectComponent = styled.select<SelectComponentProps>`
  width: ${props => props.width ? props.width : '100%'};
  padding: 10px;
  margin: 0;
  outline: none;
  border: 2px solid rgb(47 69 83);
  outline: 2px solid transparent;
  transition-duration: .2s;
  outline-offset: 2px;
  background: ${props => props.background ? props.background : '100%'};
  &:focus, &:hover {
    border-color: rgb(85 112 134)
  }
`;
