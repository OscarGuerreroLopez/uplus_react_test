import * as React from "react";
import { connect } from "react-redux";
import find from "lodash/find";
import { navigate } from "@reach/router";
import { LoanDisplay } from "./loanDetail";

import { ILoanPropsSingle, IAppState } from "../model";

class Loan extends React.Component<ILoanPropsSingle> {
  state = {
    loan: find(this.props.loans, loan => loan.id === parseInt(this.props.id))
  };

  render() {
    if (!this.state.loan) {
      navigate("/list");
    }

    return (
      <div className="container-fluid">
        {this.state.loan ? <LoanDisplay loan={this.state.loan} /> : <></>}
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
