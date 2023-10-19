import styled from "styled-components";

interface ContainerComponentProps {
  width?: string,
  height?: string,
  padding?: string,
  margin?: string,
  background?: string,
}

export const ContainerComponent = styled.div<ContainerComponentProps>`
  width: ${ props => props.width ? props.width : '100%'};
  height: ${ props => props.height ? props.height : '100vh'};
  margin: ${ props => props.margin ? props.margin : '0'};
  padding: ${ props => props.padding ? props.padding : '0'};
  background: ${ props => props.background ? props.background : 'rgb(15 33 46)'};
`;