import styled, {keyframes, css} from "styled-components";
import { STATUS } from "utils";

interface ButtonComponentProps {
  status?: STATUS,
  clicked?: string,
}

const scaleUp = keyframes`
  0% { transform: scale(0.3); opacity: 1; background-color: rgb(47 69 83); }
  25% { transform: scale(0.5); opacity: 1; background-color: rgb(47 69 83); }
  50% { transform: scale(0.7); opacity: 1; background-color: rgb(47 69 83); }
  75% { transform: scale(1.1); opacity: 1; background-color: rgb(47 69 83); }
  100% { transform: scale(1); opacity: 1; background-color: rgb(47 69 83); }
`
const ImageAnimatinClick = keyframes`
  0% { transform: scale(1); opacity: 1; background-color: rgb(47 69 83) }
  30% { transform: scale(1.1); opacity: 1; background-color: rgb(47 69 83)}
  80% { transform: scale(1); opacity: 1; background-color: rgb(47 69 83)}
  95% { transform: scale(1); opacity: 1; background-color: rgb(47 69 83)}
  100% { transform: scale(1); opacity: 1; background-color: rgb(7 24 36)}
`

const ImageAnimatinOpened = keyframes`
  0% { transform: scale(0); opacity: 0; background-color: #304452 }
  /* 90% { transform: scale(0); opacity: 0; background-color: #304452 } */
  100% { transform: scale(1); opacity: 0.5; background-color: rgb(7 24 36);}
`

const ImgShow = keyframes`
  0% { transform: scale(0); opacity: 1 }
  /* 0% { transform: scale(0.5); opacity: 0 } */
  100% { transform: scale(1); opacity: 1 }
`

const ImageAnimatinRest = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(.7); opacity: .5; }
`

const EngGameAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

export const ItemButtonComponent = styled.button<ButtonComponentProps>`
  width: 112px;
  height: 112px;
  background: rgb(47 69 83);
  box-shadow: 0 0 #0000,0 0 #0000, 0 4.8px 0 0 #213743;

  outline: none;
  transition-duration: .2s;
  border: none;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  user-select: none;
  
  &:active {
    transform: translate(0);
  }
  .selected-img {
    position: absolute;
    width: 80px;
    height: 80px;
    z-index: 10;
  }
  .effect {
    position: absolute;
    width: 160px;
    height: 160px;
    z-index: 1;
  }

  .img-bomb, .img-gem {
    width: 56px;
    height: 56px;
  }

  .selected-img:active {
    transform: scale(0.95);
  }

  animation: ${scaleUp} 100ms forwards;

  ${
    props => (props.status === STATUS.DEFAULT) &&
      css`
        &:hover {
          transform: translate(0, -2.4px) !important;
          background: rgb(85 112 134) !important;
        }
      `
  }
  
  ${
    props => (props.status === STATUS.CLICKED) && 
      css`
        
        background: rgb(47 69 83);
        transition-duration: 0.5s;
        animation-name: ${ImageAnimatinClick};
        animation-duration: 1s;
        img {
          opacity: 0;
          animation: ${ImgShow} 100ms forwards 1s;
        }
        transition: .2s;
        box-shadow: none;
        /* opacity: 0; */

        &:active {
          img {
            scale: (0.9);
            transition-duration: 0.2s;
          }
        }
        &:hover {
          /* background: rgb(7 24 36); */
        }
      `
  }

  ${
    props => (props.status === STATUS.NON_CLICKED) && 
      css`
        background: #304452;
        animation: ${ImageAnimatinOpened} 100ms forwards;
        transition: .2s;
        box-shadow: none;
        opacity: 0;
        img {
          /* visibility: hidden; */
          opacity: 0;
          animation: ${ImgShow} 100ms forwards 100ms;
        }
        &:hover {
          background: rgb(7 24 36);
        }
      `
  }
`;
