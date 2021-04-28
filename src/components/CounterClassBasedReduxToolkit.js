import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/indesReduxToolkit";
class CounterClassBased extends Component {
  incrementHandler(value) {
    this.props.increment(value);
  }
  decrementHandler(value) {
    this.props.decrement(value);
  }

  toggleCounterHandler = () => {
    this.props.toogle();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Class Based Counter</h1>
        {this.props.showCounter && (
          <div className={classes.value}>{this.props.counter}</div>
        )}
        {this.props.showCounter && (
          <div>
            <button onClick={this.incrementHandler.bind(this, 1)}>
              Increment
            </button>
            <button onClick={this.incrementHandler.bind(this, 5)}>
              Increase by 5
            </button>
            <button onClick={this.decrementHandler.bind(this, 1)}>
              Decrement
            </button>
            <button onClick={this.decrementHandler.bind(this, 5)}>
              Decrease by 5
            </button>
          </div>
        )}
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: value => dispatch(counterActions.increment({ value })),
    decrement: value => dispatch(counterActions.decrement({ value })),
    toogle: () => dispatch(counterActions.toogle()),
  };
};
//run connect, it returns a function, then run it by passing your component
export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBased);
