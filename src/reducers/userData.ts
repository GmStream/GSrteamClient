import * as actionTypes from '../actions/actionTypes';
import { appActions, appActionsWithoutPayload } from '../actions/appActions';
import { userState } from '../models';

const initialState: userState = {
  loggedIn: false
};

export const userDataReducer = (
  state: userState = initialState,
  action: appActions | appActionsWithoutPayload
): userState => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCES:
      return {
        ...state,
        email: action.payload.email,
        loggedIn: true,
        name: action.payload.name
      };
    case actionTypes.APP_SET_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name
      };
    case actionTypes.USER_LOG_OUT: {
      return initialState;
    }
    default:
      return state;
  }
};
