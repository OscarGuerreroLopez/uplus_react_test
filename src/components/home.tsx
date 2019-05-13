import * as React from "react";
import { Link } from "@reach/router";

export const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Zonky Marketplace</h1>
      <p>
        I didn't have much time to make a pretty website cause of the deadline,
        but from the code you can get an idea on how I program
      </p>
      <p>
        Please keep in mind that I only had a few hours to do it, obviously it
        can be done better with more time
      </p>
      <p>
        For this project I used TypeScript for most of it. I can also do flow
        but rather use TypeScript
      </p>
      <p>But I can adapt to anything you use over there</p>
      <p>I used bootstrap, loadash, styled components.........</p>
      <p>If you have any doubts please contact me, I can explain</p>
      <p>
        <b>Click on the link below to start</b>
      </p>
      <Link to="list">Display Loans</Link>
    </div>
  );
};
