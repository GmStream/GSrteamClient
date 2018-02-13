import * as actionTypes from './actionTypes';
import { UserData } from '../models/interfaces';

export interface IUserSignInSuccess {
  type: actionTypes.SIGN_IN_SUCCES;
  payload: UserData;
}

export type appActions = IUserSignInSuccess;

export const signInSuccess = (payload: UserData): appActions => ({
  type: actionTypes.SIGN_IN_SUCCES,
  payload
});
