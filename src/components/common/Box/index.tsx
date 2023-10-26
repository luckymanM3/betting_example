import styled from "styled-components";

export const BoxComponent = styled.div`
  position: absolute;
  background: #213743;
  border-radius: 6px;
  align-items: center;
  transition-duration: .2s;
  border: 3px solid rgb(0 231 1);
  padding: 14px 32px;
  color: rgb(0 231 1);
  text-align: center;
  .score {
    font-size: 24px;
    font-family: inherit;
    font-weight: 500;
  }

  .line {
    width: 50%;
    height: 3px;
    margin: 8px auto;
    background: rgb(47 69 83);
  }

  .amount-box {
    display: flex;
    align-items: center;
  }

  .dollar-icon {
    width: 16px;
    height: 16px;
  }

  .amount {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 4px;
  }

  .amount-box {
    justify-content: center;
  }
`;
