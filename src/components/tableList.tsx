import React from "react";
import { navigate } from "@reach/router";
import { Td } from "../style";

import { ILoan } from "../model";
import { Sentence } from "../functions/break";

export const TableList = (props: { loans: ILoan[] }) => {
  const { loans } = props;
  return (
    <div className="table-responsive">
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
                    alt={loan.photos[0].url}
                  />
                </th>

                <td>{loan.name}</td>
                <Td word={loan.story}>{Sentence(loan.story)}</Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
