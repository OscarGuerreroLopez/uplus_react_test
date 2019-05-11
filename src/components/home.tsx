import * as React from "react";
import { Link } from "@reach/router";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Home</h1>

      <h3>Test for uplus</h3>
      <h5>Zonky Marketplace</h5>
      <Link to="list">Display Loans</Link>
    </div>
  );
};
