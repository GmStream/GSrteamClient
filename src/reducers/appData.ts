import * as actionTypes from '../actions/actionTypes';
import { appActions } from '../actions/appActions';
import { appDataInitial } from '../models';

const initialState: appDataInitial = {};

// fro every error with satus 404 redirect on err page

// TODO:
// fix types for actions

export const appDataReducer = (state = initialState, action: appActions) => {
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
        selectedStreamId: ''
      };
    default:
      return state;
  }
};
