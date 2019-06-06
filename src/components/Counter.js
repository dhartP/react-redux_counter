import React, { Component } from "react";
import { increaseCount, decreaseCount } from "../actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.props.count}</h3>
        <button onClick={this.props.handleIncrease}>Increase</button>
        <button onClick={this.props.handleDecrease}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.counter
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleIncrease: increaseCount,
      handleDecrease: decreaseCount
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
