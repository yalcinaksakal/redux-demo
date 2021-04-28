import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterCSlice = createSlice({
  name: "counterC",
  initialState: initialCounterState,
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
export const counterCActions = counterCSlice.actions;
export default counterCSlice.reducer;
