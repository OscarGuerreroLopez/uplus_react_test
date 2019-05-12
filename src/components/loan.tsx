import * as React from "react";
import { connect } from "react-redux";
import find from "lodash/find";

import { ILoanPropsSingle, IAppState } from "../model";

class Loan extends React.Component<ILoanPropsSingle> {
  state = {
    loan: find(this.props.loans, loan => loan.id === parseInt(this.props.id))
  };

  render() {
    console.log(this.state.loan);

    return (
      <div className="container-fluid">
        <div className="container-fluid text-center">
          <h2>Loan Page</h2>
          <h5>{this.state.loan!.name}</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    loans: store.loansState.loans
  };
};

export default connect(mapStateToProps)(Loan);
