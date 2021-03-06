export interface IAppState {
  loansState: ILoansState;
}

export interface IPhotos {
  name: string;
  url: string;
}

export enum LoansActionTypes {
  GET_ALL = "GET_ALL",
  GET_LOANS_PENDING = "GET_LOANS_PENDING",
  GET_LOANS_ERROR = "GET_LOANS_ERROR"
}

// export enum LoanActionTypes {
//   GET_LOAN_PENDING = "GET_LOAN_PENDING",
//   GET_LOAN = "GET_LOAN",
//   GET_LOAN_ERROR = "GET_LOAN_ERROR"
// }

export interface ILoan {
  readonly id: number;
  readonly url: string;
  readonly name: string;
  readonly story: string;
  readonly purpose: string;
  readonly photos: IPhotos[];
  readonly userId: number;
  readonly nickName: string;
  readonly termInMonths: number;
  readonly interestRate: number;
  readonly revenueRate: number;
  readonly annuity: number;
  readonly premium: number;
  readonly rating: string;
  readonly topped: boolean;
  readonly amount: number;
  readonly remainingInvestment: number;
  readonly investmentRate: number;
  readonly covered: boolean;
  readonly reservedAmount: number;
  readonly zonkyPlusAmount: number;
  readonly datePublished: string;
  readonly deadline: string;
  readonly myOtherInvestments: any;
  readonly borrowerRelatedInvestmentInfo: any;
  readonly investmentsCount: number;
  readonly questionsCount: number;
  readonly region: string;
  readonly mainIncomeType: string;
  readonly questionsAllowed: boolean;
  readonly activeLoansCount: number;
  readonly insuranceActive: boolean;
  readonly insuranceHistory: any[];
  readonly fastcash: boolean;
  readonly multicash: boolean;
  readonly annuityWithInsurance: number;
}

export interface ILoansState {
  loans: ILoan[];
  loading: boolean;
  error: boolean;
}

export const initialLoansState: ILoansState = {
  loans: [],
  loading: false,
  error: false
};

export interface ILoansGetAllAction {
  type: LoansActionTypes.GET_ALL;
  loans: ILoan[];
}

export interface ILoansLoading {
  type: LoansActionTypes.GET_LOANS_PENDING;
  loading: boolean;
}

export interface ILoansError {
  type: LoansActionTypes.GET_LOANS_ERROR;
  error: boolean;
}

export interface ILoansProps {
  loans: ILoan[];
  loading: boolean;
  error: boolean;
  sortDuration: (loans: ILoan[]) => {};
  sortRating: (loans: ILoan[]) => {};
  sortAmount: (loans: ILoan[]) => {};
  sortDate: (loans: ILoan[]) => {};
}

export interface ITableListProps {
  loans: ILoan[];
}

export interface ILoanPropsSingle {
  id: string;
  loans: ILoan[];
}

export interface ITimeFetch {
  getAllLoans: () => {};
}

export type AllActions = ILoansGetAllAction | ILoansLoading | ILoansError;
