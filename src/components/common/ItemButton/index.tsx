import styled from "styled-components";

interface ButtonComponentProps {
  width?: string,
  height?: string,
  background?: string,
}

export const ItemButtonComponent = styled.button<ButtonComponentProps>`
  width: ${props => props.width ? props.width : '112px'};
  height: ${props => props.height ? props.height : '112px'};
  background: rgb(47 69 83);
  outline: none;
  transition-duration: .2s;
  border: none;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 0 #0000,0 0 #0000, 0 4.8px 0 0 #213743;
  padding: 10px;
  &:active {
    font-size: 12px;
    line-height: 16px;
  }
  &:hover {
    transform: translate(0, -2.4px);
    background: rgb(85 112 134);
  }
`;
