import { APP_CONNECTION_ERROR, STREAM_CONN_ERROR } from '../actions/actionTypes';
import { appErrorInitial } from '../models';

const initialState: appErrorInitial = {};

// fro every error with satus 404 redirect on err page

// TODO:
// fix types for actions

export const appErrorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case APP_CONNECTION_ERROR:
      return state;
    default:
      return state;
  }
};
