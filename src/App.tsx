import * as React from "react";
import RouterMain from "./router";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { ITimeFetch } from "./model";

import "bootstrap/dist/css/bootstrap.min.css";
import { getAllLoans } from "./actions/LoansActions";

class App extends React.Component<ITimeFetch, { intervalId: any }> {
  componentDidMount() {
    const check = setInterval(this.props.getAllLoans, 300000);
    this.setState({ intervalId: check });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <div className="App">
        <RouterMain />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    getAllLoans: () => {
      return dispatch(getAllLoans());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
