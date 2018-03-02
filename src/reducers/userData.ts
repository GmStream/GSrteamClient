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
        name: action.payload.name,

        profileImageLink: action.payload.image
      };
    case actionTypes.APP_SET_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        loggedIn: true,
        name: action.payload.name,
        profileImageLink: action.payload.image
      };
    case actionTypes.USER_LOG_OUT:
      return initialState;

    case actionTypes.UPDATE_USER_IMAGE:
      return {
        ...state,
        profileImageLink: action.payload
      };
    default:
      return state;
  }
};
