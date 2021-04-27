import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
//store,reducer
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload.value;
    },
    decrement(state, action) {
      state.counter -= action.payload.value;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
