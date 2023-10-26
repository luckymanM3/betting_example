import { ContainerComponent, ItemComponent, BoxComponent } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initTiles, setTileStatus, setCurrentId, setGameOver } from "store/slices/betting.slice";
import { RootState } from 'store';
import { STATUS } from "utils";
import { ItemType } from "utils";
import DollarIcon from "assets/dollar-icon.png";

export const GameComponent: React.FC = () => {

  const dispatch = useDispatch();
  const { tiles, mines, currentId, totalProfit, tilesCount, openedGems, cashout, isStarted } = useSelector((state: RootState) => state.betting);

  useEffect(() => {
    dispatch(initTiles());
  }, [dispatch]);
  
  useEffect(() => {
    if (mines.includes(currentId)) {
      setTimeout(() => {
        tiles.map((tile) => {
          if (tile.status === STATUS.DEFAULT) {
            dispatch(setTileStatus({idx: tile.idx-1, status: STATUS.NON_CLICKED}));
          }
        });
      }, 1000);
    }
    dispatch(setGameOver());
  }, [tiles, currentId]);

  const onClickTile = (idx: number) => {
    if (isStarted) {
      dispatch(setTileStatus({idx: idx-1, status: STATUS.CLICKED}));
      dispatch(setCurrentId(idx));
    }
  }

  return (
    <ContainerComponent
      width="100%"
      padding="8px"
      className="game-box"
    >
      <div className="grid grid-box">
        { 
          tiles.map((value: ItemType) => (
            <ItemComponent
              key={value.idx}
              idx={value.idx}
              isGem={value.isGem}
              status={value.status}
              // currentId={currentId}
              onOpen={onClickTile}
            />
          ))
        }   
      </div>
      {
        cashout && (
          <BoxComponent className="score-box">
            <span className="score">{(openedGems / tilesCount).toFixed(2)}×</span>
            <div className="line"></div>
            <div className="amount-box">
              <span className="amount">{totalProfit.toFixed(2)}</span>
              <img className="dollar-icon" src={DollarIcon} alt="" />
            </div>
          </BoxComponent>
        )
      }
    </ContainerComponent>
  )
}