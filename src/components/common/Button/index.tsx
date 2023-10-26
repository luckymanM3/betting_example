import styled from "styled-components";

interface ButtonComponentProps {
  width?: string,
  height?: string,
  background?: string,
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: ${props => props.width ? props.width : '100%'};
  ${props => props.height ? 'height: '+ props.height : ''};
  outline: none;
  transition-duration: .2s;
  border: none;
  padding: 10px;
  &:active {
    font-size: 12px;
    line-height: 16px;
  }
`;
