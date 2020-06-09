import React, { Component } from "react";
// import state, { UI_STRINGS } from "./state";
import state from "./state";
// import { each, filter, get, throttle } from "lodash";
import { getUserData, createUser } from "./services";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const {
    DATA_LOADING,
    DATA_SUCCESS
  } = state;
  return {
    ...DATA_LOADING,
    ...DATA_SUCCESS
  };
};

const Container = Main =>
  connect(mapStateToProps, {
    getUserData,
    createUser
  })(
    class MainComponent extends Component {
      constructor(props) {
        super(props);
        this.state = { ...state };
      }

      componentDidMount() {

      }

      render() {
        const $this = this;
        /** Merge States and Methods */
        const stateMethodProps = {
          ...$this,
          ...$this.state,
          ...$this.props
        };

        return <Main {...stateMethodProps} />;
      }
    }
  );

export default Container;
