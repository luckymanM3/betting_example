import { useEffect, useState, FocusEvent } from "react";
import { 
  ContainerComponent,
  InputComponent,
  SelectComponent,
  ButtonComponent
} from "components";
import { TOTAL_ITEM } from "utils"
import DollarIcon from "assets/dollar-icon.png";
import BombIcon from "assets/bomb-icon.png";
import GemIcon from "assets/gem-icon.png";

export const SettingComponent: React.FC = () => {
  
  const [betBTC, setBetBTC] = useState<number>(0.00000000);
  const [betAmount, setBetAmount] = useState<number>(0.00);

  const [isBetting, setIsBetting] = useState<boolean>(false);
  const [mineCount, setMineCount] = useState<number>(3);
  const [totalProfit, setTotalProfit] = useState<number>(0.00);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const mineOptions = [];
  for (let index = 1; index < 25; index++) {
    mineOptions.push(<option key={index} value={index}>{index}</option>);
  }

  const handleChangeBetAmount = (e: FocusEvent<HTMLInputElement>) => {
    setBetAmount(+(e.target.value));
  }

  return (
    <ContainerComponent
      width="384px"
      background="rgb(33 55 67)"
      padding="12px"
    >
      <div className="bet-amount mb-12">
        <div className="label-group">
          <label className="form-text text-lg" htmlFor="">Bet Amount</label>
          <label className="form-text text-sm">BTC {betBTC.toFixed(8)}</label>
        </div>
        <div className="bet-input-group">
          <div className="input-box">
            <InputComponent
              className={ (isBetting && "disabled-input") + " form-text text-lg shadow-input round-left bg-primary"}
              name="betAmount"
              id="betAmount"
              type="number"
              onBlur={handleChangeBetAmount}
              value={betAmount.toFixed(2)}
              disabled={isBetting}
            />
            <div className="input-icon">
              <img src={DollarIcon} alt="" />
            </div>
          </div>
          <ButtonComponent 
            onClick={() => setBetAmount((prev) => prev/2)} 
            className={ (isBetting && "disabled") + " half bg-light text-lg form-text"} 
            width="56px" 
            height="44px"
            disabled={isBetting}
          >
            ½
          </ButtonComponent>
          <ButtonComponent 
            onClick={() => setBetAmount((prev) => prev*2)} 
            className={ (isBetting && "disabled") + " double bg-light text-lg form-text round-right"} 
            width="56px" 
            height="44px"
            disabled={isBetting}
          >
            2×
          </ButtonComponent>
        </div>
      </div>
      {
        !isBetting && (
          <div>
            <div className="bet-amount mb-12">
              <div className="label-group">
                <label className="form-text text-lg" htmlFor="">Mines</label>
              </div>
              <div className="">
                <div className="input-box">
                  <SelectComponent
                    className="form-text text-lg shadow-input"
                    name="betAmount"
                    id="betAmount"
                    value={mineCount}
                    onChange={(e) => setMineCount(+(e.target.value))}
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
              <ButtonComponent 
                type="button"
                className="bg-green submit-btn text-lg round-4 shadow-input"
                height="56px"
                onClick={() => setIsBetting((prev) => !prev)}
              >
                Bet
              </ButtonComponent>
            </div>
          </div>
        )
      }
      {
        isBetting && (
          <div>
            <div className="flex mb-12">
              <div className="input-group">
                <div className="label-group">
                  <label className="form-text text-lg">Mines</label>
                </div>
                <div className="input-box">
                  <InputComponent
                    className="color-white form-text text-lg shadow-input bg-light round-4"
                    name="betAmount"
                    id="betAmount"
                    type="number"
                    readOnly
                    defaultValue={mineCount}
                  />
                  <div className="input-sm-icon">
                    <img src={BombIcon} alt="" />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="label-group">
                  <label className="form-text text-lg">Gems</label>
                </div>
                <div className="input-box">
                  <InputComponent
                    className="color-white form-text text-lg shadow-input bg-light round-4"
                    name="betAmount"
                    id="betAmount"
                    type="number"
                    readOnly
                    defaultValue={TOTAL_ITEM-mineCount}
                  />
                  <div className="input-icon">
                    <img src={GemIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="label-group">
                <label className="form-text text-lg" htmlFor="">Total profit (0×)</label>
                <label className="form-text text-sm">BTC {betBTC.toFixed(8)}</label>
              </div>
              <div className="bet-input-group">
                <div className="input-box">
                  <InputComponent
                    className="form-text text-lg shadow-input round-4 bg-light"
                    name="betAmount"
                    id="betAmount"
                    type="number"
                    readOnly
                    defaultValue={totalProfit.toFixed(2)}
                  />
                  <div className="input-icon">
                    <img src={DollarIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <ButtonComponent 
                className="random-pick form-text text-lg shadow-input round-4 bg-light"
                height="44px"
              >
                Pick random tile
              </ButtonComponent>
            </div>
            <div>
              <ButtonComponent 
                type="button"
                className={ (isDisabled && "disabled") + " bg-green submit-btn text-lg round-4 shadow-input"}
                height="56px"
                disabled={isDisabled}
                onClick={() => setIsBetting((prev) => !prev)}
              >
                Cashout
              </ButtonComponent>
            </div>
          </div>
        )
      }
    </ContainerComponent>
  )
}