import { ItemButtonComponent } from "components";
import { useEffect, useState } from "react";
import Bomb from "assets/bomb.svg";
import Gem from "assets/gem.svg";
import Effect from "assets/effect.gif";
import { STATUS } from "utils";
interface ItemType {
  idx: number,
  isGem: boolean,
  status: STATUS,
  // currentId: number,
  onOpen: (index: number) => void,
}

export const ItemComponent: React.FC<ItemType> = (props) => {

  const { idx, isGem, status, onOpen } = props;

  const onTileClick = () => {
    onOpen(idx);
  }

  return (
    <>
      {
        {
          [STATUS.DEFAULT]: 
            <ItemButtonComponent status={status} className="opened-animation" onClick={() => onTileClick()} ></ItemButtonComponent>,
          [STATUS.CLICKED]:
            isGem ? (
              <ItemButtonComponent className="opened"
                status={status} 
                // clicked={(currentId === idx).toString()} 
              >
                <img className="img selected-img" src={Gem} alt="" />
              </ItemButtonComponent>
            ) : (
              <ItemButtonComponent status={status} > 
                <img className="img effect" src={Effect} alt="" />
                <img className="img selected-img" src={Bomb} alt="" />
              </ItemButtonComponent>
            ),
          [STATUS.NON_CLICKED]:
            <ItemButtonComponent 
              onClick={() => onTileClick()}
              status={status}
            > <img className="img img-bomb" src={ isGem ? Gem : Bomb } alt="" /> </ItemButtonComponent>,
        }[status]
      }
    </>
  )
} 