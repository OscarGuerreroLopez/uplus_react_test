import * as React from "react";

import { connect } from "react-redux";

import { IAppState, ILoansProps } from "../model";
import { TableList } from "./tableList";

class List extends React.Component<ILoansProps> {
  componentDidMount() {}
  render() {
    const { loans, loading, error } = this.props;
    return (
      <div className="container-fluid text-center">
        <h1>List:</h1>
        <div className="container-fluid text-cemter">
          {loading ? (
            error ? (
              <div className="text-center">
                <p>Error</p>
              </div>
            ) : (
              <div className="text-center">Loading.......</div>
            )
          ) : (
            <TableList loans={loans} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    loans: store.loansState.loans,
    loading: store.loansState.loading,
    error: store.loansState.error
  };
};

export default connect(mapStateToProps)(List);
