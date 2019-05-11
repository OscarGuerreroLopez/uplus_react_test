import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";

import configureStore from "./store";
import { IAppState } from "./model";
import { getAllLoans } from "./actions/LoansActions";

import App from "./App";

interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);

store.dispatch(getAllLoans());
