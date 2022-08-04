import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { popularItems: [], fullItems: [] };

const querySlice = createSlice({
	name: "QuarySlice",
	initialState,
	reducers: {
		setFullItems(state, actions) {
			state.fullItems = actions.payload;
		},
		setPouplarItems(state, actions) {
			state.popularItems = actions.payload;
		},
	},
});

const store = configureStore({
	reducer: querySlice.reducer,
});

export const queryActions = querySlice.actions;

export default store;