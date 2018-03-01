import { SessionData, UserData } from '../models/interfaces';
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

// create data type for payload
export interface ILoadChannels {
  type: actionTypes.APP_LOAD_CHANNELS;
  payload: {
    limit: number;
  };
}

export interface ILeaveStream {
  type: actionTypes.LEAVING_STREAM;
}

export interface IStopStream {
  type: actionTypes.STOP_STREAM;
  payload: any;
}

export interface ILoadMoreChannels {
  type: actionTypes.APP_LOAD_MORE_CHANNELS;
  payload: {
    searchString?: string;
    skip?: number;
    limit: number;
  };
}

export interface IRefreshChannelsList {
  type: actionTypes.APP_REFRESH_CHANNELS_LIST;
  payload: any;
}

export interface ICleacrChannelsData {
  type: actionTypes.APP_CLEAR_CHANNELS_DATA;
}

export interface ISetUserData {
  payload: any;
  type: actionTypes.APP_SET_USER_DATA;
}

export type appActions =
  | IUserSignInSuccess
  | IChannelChose
  | ILoadChannels
  | ILoadMoreChannels
  | IRefreshChannelsList
  | ISetUserData
  | IStopStream;

export type appActionsWithoutPayload =
  | IUserLogOut
  | ILeaveStream
  | IAppConnectionError
  | IUselectChannel
  | ICleacrChannelsData;

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

export const stopStream = (payload: any) => ({
  payload,
  type: actionTypes.STOP_STREAM
});

export const continueSession = (payload: UserData) => ({
  payload,
  type: actionTypes.SIGN_IN_SUCCES
});

export const loadChannels = (payload: any) => ({
  payload,
  type: actionTypes.APP_LOAD_CHANNELS
});

export const loadMoreChannels = (payload: any) => ({
  payload,
  type: actionTypes.APP_LOAD_MORE_CHANNELS
});

export const clearChannelsData = () => ({
  type: actionTypes.APP_CLEAR_CHANNELS_DATA
});

export const setUserData = (payload: any) => ({
  payload,
  type: actionTypes.APP_SET_USER_DATA
});
