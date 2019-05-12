import * as React from "react";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { IAppState, ILoansProps, ILoan } from "../model";
import { TableList } from "./tableList";
import {
  sortDuration,
  sortRating,
  sortAmount,
  sortDate
} from "../actions/LoansActions";

class List extends React.Component<ILoansProps> {
  duration = () => {
    this.props.sortDuration(this.props.loans);
  };

  rating = () => {
    this.props.sortRating(this.props.loans);
  };

  amount = () => {
    this.props.sortAmount(this.props.loans);
  };

  date = () => {
    this.props.sortDate(this.props.loans);
  };

  render() {
    const { loans, loading, error } = this.props;
    return (
      <div className="container-fluid text-center">
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
            <>
              <h2>Sort by:</h2>
              <div className="container mb-3">
                <div className="row">
                  <div className="col-sm" onClick={() => this.duration()}>
                    Duration
                  </div>
                  <div className="col-sm" onClick={() => this.rating()}>
                    Rating
                  </div>
                  <div className="col-sm" onClick={() => this.amount()}>
                    Amount required
                  </div>
                  <div className="col-sm" onClick={() => this.date()}>
                    Deadline
                  </div>
                </div>
              </div>
              <TableList loans={loans} />
            </>
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

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    sortDuration: (loans: ILoan[]) => {
      return dispatch(sortDuration(loans));
    },
    sortRating: (loans: ILoan[]) => {
      return dispatch(sortRating(loans));
    },
    sortAmount: (loans: ILoan[]) => {
      return dispatch(sortAmount(loans));
    },
    sortDate: (loans: ILoan[]) => {
      return dispatch(sortDate(loans));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
