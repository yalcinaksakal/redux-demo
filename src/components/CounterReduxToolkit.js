import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const incrementHandler = value => {
    dispatch(counterActions.increment({ value }));
  };
  const decrementHandler = value => {
    dispatch(counterActions.decrement({ value }));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {show && (
        <div>
          <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
          <button onClick={incrementHandler.bind(null, 5)}>
            Increase by 5
          </button>
          <button onClick={decrementHandler.bind(null, 1)}>Decrement</button>
          <button onClick={decrementHandler.bind(null, 5)}>
            Decrease by 5
          </button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
