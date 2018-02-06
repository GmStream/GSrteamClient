import * as actionTypes from './actionTypes';

import { ConfPayload, SignInData, SignUpData } from '../models/interfaces';

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

export interface IConfirm {
  type: actionTypes.USER_CONFIRMATION;
  payload: ConfPayload;
}

export type FromActions = ISignUp | ISignUpErr | ISignInErr | IConfirm | ISignIn;

export const signUp = (payload: SignUpData): ISignUp => ({
  payload,
  type: actionTypes.USER_SIGN_UP
});

export const signIn = (payload: SignInData): ISignIn => ({
  payload,
  type: actionTypes.USER_SIGN_IN
});

export const emailConfirmation = (payload: ConfPayload): IConfirm => ({
  payload,
  type: actionTypes.USER_CONFIRMATION
});
