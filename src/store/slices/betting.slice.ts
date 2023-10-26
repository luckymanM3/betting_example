import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateArray } from "utils/generateAarray";
import { ItemType, STATUS } from "utils";

const bettingSlice = createSlice({
	name: 'betting',
	initialState: {
		tilesCount: 25,
		minesCount: 3,
		currentId: -1,
		tiles: [] as ItemType[],
		mines: [] as Number[],
		isGameOver: false,
		openedGems: 0,
		totalProfit: 0,
		cashout: false,
		isStarted: false,
	},
	reducers: {
		initTiles(state) {
			state.minesCount = 3;
			state.currentId = -1;
			state.openedGems = 0;
			state.isGameOver = false;
			state.cashout = false;
			state.isStarted = false;
			const {itemsArray, randomNumberArray} = generateArray(3);
			state.tiles = itemsArray;
			state.mines = randomNumberArray;
		},
		setCurrentId(state, action) {
			state.currentId = action.payload;
		},

		setMinesCount(state, action) {
			state.minesCount = action.payload;
			state.currentId = -1;
			state.openedGems = 0;
			state.isGameOver = false;
			state.cashout = false;
			state.isStarted = true;
			const {itemsArray, randomNumberArray} = generateArray(action.payload);
			state.tiles = itemsArray;
			state.mines = randomNumberArray;
		},

		setTileStatus(state, action) {
			state.tiles[action.payload.idx].status = action.payload.status;
		},

		setGameOver(state) {
			state.isGameOver = state.tiles.every(element => element.status !== STATUS.DEFAULT);
			state.openedGems = state.tiles.filter(element => element.status === STATUS.CLICKED && element.isGem).length;
			if(state.isGameOver) state.isStarted = false;
		},

		setTotalProfit(state, action) {
			state.totalProfit = action.payload;
		},

		setCashout(state) {
			state.cashout = true;
			state.isStarted = false;
		}
	}
})

export const {
	initTiles,
  setCurrentId,
  setMinesCount,
  setTileStatus,
  setGameOver,
  setTotalProfit,
  setCashout,
} = bettingSlice.actions;

export default bettingSlice.reducer;