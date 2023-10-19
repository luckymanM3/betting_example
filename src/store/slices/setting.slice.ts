import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateType = {

}

const initialState: StateType = {

}

const settingSlice = createSlice({
	name: 'setting',
	initialState: initialState,
	reducers: {

	}
})

export const {

} = settingSlice.actions;

export const reducer = settingSlice.reducer;
export const actions = settingSlice.actions;