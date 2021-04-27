import { createStore } from "redux";
//store,reducer
const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment")
    return { ...state, counter: state.counter + action.value };

  if (action.type === "decrement")
    return { ...state, counter: state.counter - action.value };
  if (action.type === "toogle")
    return { ...state, showCounter: !state.showCounter };
  return state;
};

const store = createStore(counterReducer);

export default store;
