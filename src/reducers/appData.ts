import { startStream } from 'api/api';
import * as actionTypes from '../actions/actionTypes';
import { appActions, appActionsWithoutPayload } from '../actions/appActions';
import { ChatAction } from '../actions/chatActions';
import { FormActions } from '../actions/formActions';
import { appDataInitial } from '../models';

const initialState: appDataInitial = {
  channels: [],
  chatMessages: []
};

// fro every error with satus 404 redirect on err page

// TODO:
// fix types for actions

export const appDataReducer = (
  state = initialState,
  action: appActions | appActionsWithoutPayload | ChatAction | FormActions
) => {
  switch (action.type) {
    case actionTypes.APP_CONNECTION_ERROR:
      return state;
    case actionTypes.CONNECTION_TO_STREAM:
      return {
        ...state,
        selectedStreamId: action.payload
      };
    case actionTypes.LEAVING_STREAM:
      return {
        ...state,
        chatMessages: [],
        selectedStreamId: ''
      };
    case actionTypes.APP_REFRESH_CHANNELS_LIST:
      return {
        ...state,
        channels: [].concat(state.channels as any, action.payload)
      };
    case actionTypes.CHAT_MESSAGE_EMMITION:
      return {
        ...state,
        chatMessages: [].concat(state.chatMessages as any, action.payload)
      };
    case actionTypes.APP_CLEAR_CHANNELS_DATA:
      return {
        ...state,
        channels: []
      };
    case actionTypes.CLEAR_STREAM_DATA:
      return {
        ...state,
        isChannelLive: false,
        streamName: ''
      };
    case actionTypes.SET_STREAM_DATA:
      return {
        ...state,
        isChannelLive: action.payload.isStreaming,
        streamName: action.payload.streamName
      };
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: ''
      };
    case actionTypes.SIGN_UP_SUCCES:
      return {
        ...state,
        successData: action.payload
      };
    case actionTypes.CLEAR_SUCCESS_DATA:
      return {
        ...state,
        successData: ''
      };
    default:
      return state;
  }
};
