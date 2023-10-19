import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { ItemType } from "utils";
import {
  ContainerComponent,
  SettingComponent,
  GameComponent
} from "components";

export const HomeContainer: React.FC = () => {

  // const items_array = 
  const items_array: ItemType[] = [];
  
  // items_array.fill({
  //   isGem: true,
  //   isOpen: false
  // });

  // const getRndInteger = (min: number, max: number) => {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  // const random_array: number[] = Array(40).fill(3, 0).map(() => Math.round(Math.random() * 40));

  // console.log("items_array", items_array);
  // console.log("random_array", random_array);

  // const [items, setItems] = useState<ItemType[]>()

  
  return (
    <>
      <ContainerComponent className="full-container">
        <SettingComponent />
        <GameComponent />
      </ContainerComponent>
    </>
  )
}