import { Reducer } from "redux";
import {
  AllActions,
  initialLoansState,
  ILoansState,
  LoansActionTypes
} from "../model";

export const loanReducer: Reducer<ILoansState, AllActions> = (
  state = initialLoansState,
  action
) => {
  switch (action.type) {
    case LoansActionTypes.GET_ALL: {
      return {
        ...state,
        loans: action.loans
      };
    }

    case LoansActionTypes.GET_LOANS_PENDING: {
      return {
        ...state,
        loading: action.loading
      };
    }

    case LoansActionTypes.GET_LOANS_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }

    default:
      return state;
  }
};
