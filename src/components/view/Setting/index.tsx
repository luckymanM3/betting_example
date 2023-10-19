import { useState } from "react";
import { 
  ContainerComponent,
  InputComponent,
  SelectComponent,
  ButtonComponent
} from "components";
import DollarIcon from "assets/dollar-icon.png";

export const SettingComponent: React.FC = () => {
  
  const [betBTC, setBetBTC] = useState<number>(0.00000000);
  const [betAmount, setBetAmount] = useState<number>(0.00);

  const mineOptions = [];
  for (let index = 1; index < 25; index++) {
    mineOptions.push(<option value={index}>{index}</option>);
  }

  return (
    <ContainerComponent
      width="384px"
      background="rgb(33 55 67)"
      padding="12px"
    >
      <div className="bet-amount input-m-b">
        <div className="label-group">
          <label className="form-text text-lg" htmlFor="">Bet Amount</label>
          <label className="form-text text-sm">BTC {betBTC.toFixed(8)}</label>
        </div>
        <div className="bet-input-group">
          <div className="bet-input-box">
            <InputComponent
              className="form-text text-lg shadow-input round-left bg-primary"
              name="betAmount"
              id="betAmount"
              type="number"
              value={betAmount.toFixed(2)}
            />
            <div className="dollor-icon">
              <img src={DollarIcon} alt="" />
            </div>
          </div>
          <ButtonComponent className="half bg-light text-lg form-text" width="56px" height="44px">½</ButtonComponent>
          <ButtonComponent className="double bg-light text-lg form-text round-right" width="56px" height="44px">2×</ButtonComponent>
        </div>
      </div>
      <div>
        <div className="bet-amount input-m-b">
          <div className="label-group">
            <label className="form-text text-lg" htmlFor="">Mines</label>
          </div>
          <div className="">
            <div className="bet-input-box">
              <SelectComponent
                className="form-text text-lg shadow-input"
                name="betAmount"
                id="betAmount"
                value={3}
                background="rgb(15 33 46)"
              >
                {
                  mineOptions
                }
              </SelectComponent>
            </div>
          </div>
        </div>
        <div>
          <ButtonComponent className="bg-green submit-btn text-lg round-4 shadow-input">Bet</ButtonComponent>
        </div>
      </div>
      
      <div>
        <div>
          
        </div>
      </div>
    </ContainerComponent>
  )
}