import React from "react";

import { ILoan } from "../model";

import { ConvertDateHours } from "../functions/convert_date";

export const LoanDisplay = (props: { loan: ILoan }) => {
  const { loan } = props;

  const translateBoolean = (value: boolean) => {
    if (value) {
      return <span>Yeah</span>;
    }
    return <span>Nope</span>;
  };

  return (
    <div className="container text-center">
      <div className="card  mt-5">
        <div className="card-body">
          <h1>Loan Name: {loan.name}</h1>
        </div>
      </div>
      <div className="card  mt-2">
        <div className="card-body">
          <h5>{loan.story}</h5>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card  mt-2">
              <img
                className="card-img-top"
                src={"https://api.zonky.cz" + loan.photos[0].url}
                alt={loan.photos[0].url}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  <a href={loan.url}>{loan.url}</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <p>
              <b>Nickname: </b>
              {loan.nickName}
            </p>
            <p>
              <b>Terms in Months: </b>
              {loan.termInMonths}
            </p>
            <p>
              <b>Interest rate: </b>
              {loan.interestRate}%
            </p>
            <p>
              <b>Revenue rate: </b>
              {loan.revenueRate}%
            </p>
            <p>
              <b>Annuity: </b>
              {loan.annuity}
            </p>
            <p>
              <b>Raiting: </b>
              {loan.rating}
            </p>
            <p>
              <b>Date Published: </b>
              {ConvertDateHours(loan.datePublished)}
            </p>
            <p>
              <b>Dead line: </b>
              {ConvertDateHours(loan.deadline)}
            </p>
            <p>
              <b>Amount: </b>
              {loan.amount.toLocaleString("en-EUR", {
                style: "currency",
                currency: "CZK"
              })}
            </p>
            <p>
              <b>Region: </b>
              {loan.region}
            </p>
            <p>
              <b>Main income type: </b>
              {loan.mainIncomeType}
            </p>
            <p>
              <b>Fast Cash: </b>
              {translateBoolean(loan.fastcash)}
            </p>
            <p>
              <b>Multi Cash: </b>
              {translateBoolean(loan.multicash)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
