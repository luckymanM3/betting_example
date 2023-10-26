import { useEffect, useState, FocusEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  ContainerComponent,
  InputComponent,
  SelectComponent,
  ButtonComponent
} from "components";
import { initTiles, setTileStatus, setTotalProfit, setCashout, setCurrentId, setMinesCount } from 'store/slices/betting.slice';
import { RootState } from "store";
import { TOTAL_ITEM, STATUS } from "utils";
import DollarIcon from "assets/dollar-icon.png";
import BombIcon from "assets/bomb-icon.png";
import GemIcon from "assets/gem-icon.png";

export const SettingComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { tiles, tilesCount, isGameOver, currentId, openedGems } = useSelector((state: RootState) => state.betting);

  const [amount, setAmount] = useState<string>("0.00");
  const [mineCount, setMineCount] = useState<number>(3);
  const [isBeted, setBeted] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const usdToBtcRate = 0.000048;

  useEffect(() => {
    dispatch(initTiles());
  }, [ dispatch ]);

  useEffect(() => {
    if (isBeted) {
      dispatch(setMinesCount(mineCount));
    }
  }, [isBeted]);

  useEffect(() => {
    if (isGameOver === true) {
      setAmount("0.00");
      setMineCount(3);
      setBeted(false);
    }
  }, [isGameOver]);

  const onChangeAmount = (e: any) => {
    setAmount(e.target.value);
  }

  const onBlurAmount = () => {
    setAmount(Number(amount).toFixed(2));
  }

  const halfAmount = () => {
    const factor = Math.pow(10, 2);
    setAmount((Math.floor(Number(amount) / 2 * factor) / factor).toFixed(2));
  }

  const doubleAmount = () => {
    const factor = Math.pow(10, 2);
    setAmount((Math.floor(Number(amount) * 2 * factor) / factor).toFixed(2));
  }

  const onChangeMinesCount = (e: any) => {
    setMineCount(e.target.value);
  }

  const onClickBet = () => {
    setBeted(true);
  }

  const pickRandomTile = () => {
    setLoading(true);
    let index = Math.floor(Math.random() * 25);
    while(tiles[index].status === STATUS.CLICKED) {
      index = Math.floor(Math.random() * 25);
    }
    dispatch(setTileStatus({ idx: index, status: STATUS.CLICKED}));
    dispatch(setCurrentId(index+1));
    
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  const cashout = () => {
    setLoading(true);
    setTimeout(() => {
      // eslint-disable-next-line array-callback-return
      tiles.map((tile) => {
        if (tile.status === STATUS.DEFAULT) {
          dispatch(setTileStatus({idx: tile.idx-1, status: STATUS.NON_CLICKED}));
        }
      });
      dispatch(setTotalProfit(Number(amount) * (openedGems / tilesCount)));
      dispatch(setCashout());
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    console.log((Number(amount) * (openedGems / tilesCount)).toFixed(2));
  })

  return (
    <ContainerComponent
      width="384px"
      background="rgb(33 55 67)"
      padding="12px"
    >
      <div className="bet-amount mb-12">
        <div className="label-group">
          <label className="form-text text-lg" htmlFor="">Bet Amount</label>
          <label className="form-text text-sm">BTC {(Number(amount) * usdToBtcRate).toFixed(8)}</label>
        </div>
        <div className="bet-input-group">
          <div className="input-box">
            <InputComponent
              className={ (isBeted && "disabled-input") + " form-text text-lg shadow-input round-left bg-primary"}
              name="betAmount"
              id="betAmount"
              type="number"
              onChange={onChangeAmount}
              onBlur={onBlurAmount}
              value={amount}
              disabled={isBeted}
            />
            <div className="input-icon">
              <img src={DollarIcon} alt="" />
            </div>
          </div>
          <ButtonComponent 
            onClick={halfAmount} 
            className={ (isBeted && "disabled") + " half bg-light text-lg form-text"} 
            width="56px" 
            height="44px"
            disabled={isBeted}
          >
            ½
          </ButtonComponent>
          <ButtonComponent 
            onClick={doubleAmount} 
            className={ (isBeted && "disabled") + " double bg-light text-lg form-text round-right"} 
            width="56px" 
            height="44px"
            disabled={isBeted}
          >
            2×
          </ButtonComponent>
        </div>
      </div>
      {
        !isBeted && (
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
                    defaultValue={mineCount || 3}
                    onChange={onChangeMinesCount}
                    background="rgb(15 33 46)"
                  >
                    {
                      [...Array(tilesCount - 1)].map((_, i) => (
                        <option key={i} value={i+1}>{ i+1 }</option>
                      ))
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
                onClick={onClickBet}
              >
                Bet
              </ButtonComponent>
            </div>
          </div>
        )
      }
      {
        isBeted && (
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
                    value={mineCount}
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
                    value={tilesCount - mineCount}
                  />
                  <div className="input-icon">
                    <img src={GemIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="label-group">
                <label className="form-text text-lg" htmlFor="">Total profit ({openedGems / tilesCount}×)</label>
                <label className="form-text text-sm">BTC {(Number(amount) * (openedGems / tilesCount) * usdToBtcRate).toFixed(8)}</label>
              </div>
              <div className="bet-input-group">
                <div className="input-box">
                  <InputComponent
                    className="form-text text-lg shadow-input round-4 bg-light"
                    name="betAmount"
                    id="betAmount"
                    // type="number"
                    readOnly
                    value={(Number(amount) * (openedGems / tilesCount)).toFixed(2)}
                  />
                  <div className="input-icon">
                    <img src={DollarIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <ButtonComponent 
                className={ (isLoading ? "disabled" : "") + " random-pick form-text text-lg shadow-input round-4 bg-light"}
                height="44px"
                disabled={isLoading}
                onClick={pickRandomTile}
              >
                Pick random tile
              </ButtonComponent>
            </div>
            <div>
              <ButtonComponent 
                type="button"
                className={ (!(currentId > 0) && "disabled") + " bg-green submit-btn text-lg round-4 shadow-input"}
                height="56px"
                disabled={isLoading || !(currentId > 0)}
                onClick={cashout}
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