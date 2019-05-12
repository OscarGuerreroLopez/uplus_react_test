import { applyMiddleware, combineReducers, createStore, Store } from "redux";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { IAppState } from "../model";
import { loanReducer } from "../reducers/loanReducer";

const rootReducer = combineReducers<IAppState>({
  loansState: loanReducer
});

const logger = createLogger({
  collapsed: true
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk, logger)
  );
  return store;
}
