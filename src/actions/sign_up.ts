import * as actionTypes from './actionTypes';

import { SignUpData } from '../models/interfaces';

export interface ICheckEmailAction {
  type: actionTypes.CHECK_USER_EMAIL;
  payload: string;
}

export interface ICheckChannelName {
  type: actionTypes.CHECK_CHANNEL_NAME;
  payload: string;
}

export interface ICheckUserName {
  type: actionTypes.CHECK_USERNAME;
  payload: string;
}

export interface ISignUp {
  type: actionTypes.USER_SIGN_UP;
  payload: SignUpData;
}

export type SignUpActions = ISignUp | ICheckUserName | ICheckChannelName | ICheckEmailAction;
