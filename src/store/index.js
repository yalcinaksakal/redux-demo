import { createStore } from "redux";
//store,reducer

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + action.value,
    };

  if (action.type === "decrement")
    return {
      counter: state.counter - action.value,
    };

  return state;
};

const store = createStore(counterReducer);

export default store;
