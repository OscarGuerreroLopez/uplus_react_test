import * as React from "react";

import { connect } from "react-redux";

import { IAppState, ILoanProps } from "../model";

class List extends React.Component<ILoanProps> {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { loans, loading, error } = this.props;
    return (
      <div className="container-fluid text-center">
        <h1>List:</h1>
      </div>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    loans: store.loanState.loans,
    loading: store.loanState.loading,
    error: store.loanState.error
  };
};

export default connect(mapStateToProps)(List);
