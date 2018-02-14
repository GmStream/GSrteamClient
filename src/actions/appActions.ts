import { UserData } from '../models/interfaces';
import * as actionTypes from './actionTypes';

export interface IUserSignInSuccess {
  type: actionTypes.SIGN_IN_SUCCES;
  payload: UserData;
}

export interface IUserLogOut {
  type: actionTypes.USER_LON_OUT;
}

export interface IChannelChose {
  type: actionTypes.REDIRECTION_TO_CHANNEL;
  payload: string;
}

export type appActions = IUserSignInSuccess | IUserLogOut | IChannelChose;

export const logOut = () => ({
  type: actionTypes.USER_LON_OUT
});

export const redirectToChannel = (payload: string) => ({
  payload,
  type: actionTypes.REDIRECTION_TO_CHANNEL
});
