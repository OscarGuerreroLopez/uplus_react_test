import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
// import { Observable } from "rxjs";
import axios from "axios";

import { ILoanState, LoanActionTypes, AllActions } from "../model";

import { compare_duration_asc } from "../functions/compare_duration";

export const getAllLoans: ActionCreator<
  ThunkAction<Promise<any>, ILoanState, null, AllActions>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: LoanActionTypes.GET_LOANS_PENDING,
      loading: true
    });
    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        credentials: "same-origin",
        "Access-Control-Allow-Methods": "POST, GET",
        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type"
      }
    };

    axios
      .get("http://localhost:3000/zonky", axiosConfig)
      .then(response => {
        dispatch({
          loans: response.data.sort(compare_duration_asc),
          type: LoanActionTypes.GET_ALL
        });
        dispatch({
          type: LoanActionTypes.GET_LOANS_ERROR,
          error: false
        });

        dispatch({
          type: LoanActionTypes.GET_LOANS_PENDING,
          loading: false
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: LoanActionTypes.GET_LOANS_ERROR,
          error: true
        });
        dispatch({
          type: LoanActionTypes.GET_LOANS_PENDING,
          loading: false
        });
      });
  };
};
