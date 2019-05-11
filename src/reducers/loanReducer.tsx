import { Reducer } from "redux";
import {
  AllActions,
  initialLoanState,
  ILoanState,
  LoanActionTypes
} from "../model";

export const loanReducer: Reducer<ILoanState, AllActions> = (
  state = initialLoanState,
  action
) => {
  switch (action.type) {
    case LoanActionTypes.GET_ALL: {
      return {
        ...state,
        loans: action.loans
      };
    }

    case LoanActionTypes.GET_LOANS_PENDING: {
      return {
        ...state,
        loading: action.loading
      };
    }

    case LoanActionTypes.GET_LOANS_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }

    default:
      return state;
  }
};
