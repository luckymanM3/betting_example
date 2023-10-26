import { ItemType, STATUS } from "./consts";

export const generateArray = (bomb: number) => {
  const itemsArray: ItemType[] = [];

  const getRndInteger = () => {
    return Math.floor(Math.random() * (24 - 1)) + 1;
  }

  const randomNumberArray: number[] = [];
  for(let i = 0; i < bomb; i ++) {
    let rndNumber = getRndInteger();
    if(randomNumberArray.includes(rndNumber)) {
      i--;
    } else {
      randomNumberArray.push(rndNumber);
    }
  }

  for(let i = 0; i < 25; i ++) {
    if(randomNumberArray.includes(i+1)) {
      itemsArray.push({
        idx: i+1,
        isGem: false,
        status: STATUS.DEFAULT
      })
    } else {
      itemsArray.push({
        idx: i+1,
        isGem: true,
        status: STATUS.DEFAULT
      })
    }
  }

  return {itemsArray, randomNumberArray};
}