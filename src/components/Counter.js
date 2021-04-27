import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = (value = 1) => {
    dispatch({ type: "increment", value: value });
  };
  const decrementHandler = (value = 1) => {
    dispatch({ type: "decrement", value: value });
  };
  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
        <button onClick={incrementHandler.bind(null, 5)}>Increase by 5</button>
        <button onClick={decrementHandler.bind(null, 1)}>Decrement</button>
        <button onClick={decrementHandler.bind(null, 5)}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
