import { combineReducers, configureStore } from "@reduxjs/toolkit";

import bettingReducer from "./slices/betting.slice";

const reducer = combineReducers({
  betting: bettingReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
