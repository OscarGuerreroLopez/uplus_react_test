import React from "react";
import { Router } from "@reach/router";

import { Home } from "../components/home.tsx";
import List from "../components/list.tsx";

const RouterMain = () => {
  return (
    <Router>
      <Home path="/" />
      <Home path="home" />
      <List path="list" />
    </Router>
  );
};

export default RouterMain;
