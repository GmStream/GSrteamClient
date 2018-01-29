import * as actionTypes from './actionTypes';

import { SignInData, SignUpData } from '../models/interfaces';

export interface ISignUpErr {
  type: actionTypes.SIGN_UP_ERROR;
  payload: string;
}

export interface ISignInErr {
  type: actionTypes.SIGN_IN_ERROR;
  payload: string;
}

export interface ISignUp {
  type: actionTypes.USER_SIGN_UP;
  payload: SignUpData;
}

export interface ISignIn {
  type: actionTypes.USER_SIGN_IN;
  payload: SignInData;
}

export type FromActions = ISignUp | ISignUpErr | ISignInErr;

export const signUp = (payload: SignUpData): ISignUp => ({
  payload,
  type: actionTypes.USER_SIGN_UP
});
