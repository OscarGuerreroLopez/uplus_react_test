import React from "react";
import { Link, navigate } from "@reach/router";

import { ILoan } from "../model";

export const TableList = (props: { loans: ILoan[] }) => {
  const { loans } = props;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Story</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan: ILoan) => {
          return (
            <tr key={loan.id} onClick={() => navigate(`/loan/${loan.id}`)}>
              <th scope="row">
                <img
                  src={"https://api.zonky.cz" + loan.photos[0].url}
                  className="img-fluid"
                  alt="Responsive image"
                />
              </th>

              <td>{loan.name}</td>
              <td>{loan.story}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
