import * as actionTypes from './actionTypes';

export interface IUserSignInSuccess {
  type: actionTypes.SIGN_IN_SUCCES;
  payload: { token: string };
}

export type appActions = IUserSignInSuccess;
