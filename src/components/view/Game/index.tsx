import { ContainerComponent, ItemComponent } from "components";

export const GameComponent: React.FC = () => {

  const ItemsDOM = [];
  for (let i = 1; i < 26; i++) {    
    ItemsDOM.push(
      <ItemComponent 
        idx={i}
        isGem={true}
        isOpen={false}
      />
    );
  }

  return (
    <ContainerComponent
      width="100%"
      padding="8px"
      className="game-box"
    >
      <div className="grid grid-box">
        { 
          ItemsDOM.map((value, index) => {
            return(value)
          })
        }   
      </div>
    </ContainerComponent>
  )
}