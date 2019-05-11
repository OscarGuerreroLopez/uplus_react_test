import * as React from "react";
import RouterMain from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RouterMain />
      </div>
    );
  }
}

export default App;
