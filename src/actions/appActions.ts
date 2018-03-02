import { SessionData, UserData } from '../models/interfaces';
import * as actionTypes from './actionTypes';

export interface IUserSignInSuccess {
  type: actionTypes.SIGN_IN_SUCCES;
  payload: UserData;
}

export interface IGetStreamKey {
  type: actionTypes.GET_STREAM_KEY;
  payload: any;
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

export interface IClearError {
  type: actionTypes.CLEAR_ERROR;
}

export interface ILeaveStream {
  type: actionTypes.LEAVING_STREAM;
}

export interface IStopStream {
  type: actionTypes.STOP_STREAM;
  payload: any;
}

export interface IClearSuccessData {
  type: actionTypes.CLEAR_SUCCESS_DATA;
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

export interface IStartStream {
  payload: any;
  type: actionTypes.START_STREAM;
}

export interface ICheckStream {
  payload: any;
  type: actionTypes.CHECK_STREAM;
}

export interface IClearStreamData {
  type: actionTypes.CLEAR_STREAM_DATA;
}

export interface ISuccessData {
  payload: string;
  type: actionTypes.SIGN_UP_SUCCES;
}

export interface ISetStreamData {
  payload: any;
  type: actionTypes.SET_STREAM_DATA;
}

export type appActions =
  | IUserSignInSuccess
  | IChannelChose
  | ILoadChannels
  | ILoadMoreChannels
  | IRefreshChannelsList
  | ISetUserData
  | IStopStream
  | IGetStreamKey
  | IStartStream
  | ISetStreamData
  | ISuccessData;

export type appActionsWithoutPayload =
  | IUserLogOut
  | ILeaveStream
  | IAppConnectionError
  | IUselectChannel
  | ICleacrChannelsData
  | IClearStreamData
  | IClearError
  | IClearSuccessData;

export const logOut = () => ({
  type: actionTypes.USER_LOG_OUT
});

export const checkStreaming = (payload: any) => ({
  payload,
  type: actionTypes.CHECK_STREAM
});

export const endStream = () => ({
  type: actionTypes.LEAVING_STREAM
});

export const selectChannel = (payload: string) => ({
  payload,
  type: actionTypes.CONNECTION_TO_STREAM
});

export const leaveStream = () => ({
  type: actionTypes.LEAVING_STREAM
});

export const startStream = (payload: any) => ({
  payload,
  type: actionTypes.START_STREAM
});

export const getStreamKey = (payload: any) => ({
  payload,
  type: actionTypes.GET_STREAM_KEY
});

export const stopStream = (payload: any) => ({
  payload,
  type: actionTypes.STOP_STREAM
});

export const clearStreamData = () => ({
  type: actionTypes.CLEAR_STREAM_DATA
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
