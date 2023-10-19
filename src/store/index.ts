import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  settingReducer,
  settingActions,
} from "./slices";

const reducer = combineReducers({
  setting: settingReducer,
});

export const store = configureStore({
  preloadedState: {},
  reducer,
});


export const AppActions = {
  setting: settingActions
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
