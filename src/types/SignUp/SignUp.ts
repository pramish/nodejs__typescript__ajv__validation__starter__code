import { IResponse } from "../Response";

export interface ISignUpResponse extends IResponse {
  firstName?: string;
  lastName?: string;
  email?: string;
}
