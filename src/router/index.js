import React from "react";
import { Router } from "@reach/router";

import { Home } from "../components/home.tsx";
import List from "../components/list.tsx";
import Loan from "../components/loan.tsx";

const RouterMain = () => {
  return (
    <Router>
      <Home path="/" />
      <Home path="home" />
      <List path="list" />
      <Loan path="loan/:id" />
    </Router>
  );
};

export default RouterMain;
