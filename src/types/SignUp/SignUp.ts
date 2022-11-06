import { IResponse } from "../Response";

export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ISignUpResponse extends IResponse {
  firstName?: string;
  lastName?: string;
  email?: string;
}
