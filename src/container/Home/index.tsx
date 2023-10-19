import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import {
  ContainerComponent,
  SettingComponent,
  GameComponent
} from "components";

export const HomeContainer: React.FC = () => {

  return (
    <>
      <ContainerComponent className="full-container">
        <SettingComponent />
        <GameComponent />
      </ContainerComponent>
    </>
  )
}