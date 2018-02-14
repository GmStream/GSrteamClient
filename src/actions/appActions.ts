import { UserData } from '../models/interfaces';
import * as actionTypes from './actionTypes';

export interface IUserSignInSuccess {
  type: actionTypes.SIGN_IN_SUCCES;
  payload: UserData;
}

export interface IUselectChannel {
  type: actionTypes.LEAVING_STREAM;
}

export interface IAppConnectionError {
  type: actionTypes.APP_CONNECTION_ERROR;
}
export interface IUserLogOut {
  type: actionTypes.USER_LOG_OUT;
}

export interface IChannelChose {
  type: actionTypes.CONNECTION_TO_STREAM;
  payload: string;
}

export type appActions =
  | IUserSignInSuccess
  | IUserLogOut
  | IChannelChose
  | IAppConnectionError
  | IUselectChannel;

export const logOut = () => ({
  type: actionTypes.USER_LOG_OUT
});

export const selectChannel = (payload: string) => ({
  payload,
  type: actionTypes.CONNECTION_TO_STREAM
});

export const leaveStream = () => ({
  type: actionTypes.LEAVING_STREAM
});

// TODO:
// add actions to select channel and configure (params ID)
