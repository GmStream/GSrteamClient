import { SIGN_IN_SUCCES } from '../actions/actionTypes';
import { appActions } from '../actions/appActions';
import { userState } from '../models';

const initialState: userState = {
  loggedIn: false
};

export const userDataReducer = (state: userState = initialState, action: appActions): userState => {
  switch (action.type) {
    case SIGN_IN_SUCCES:
      return {
        ...state,
        email: action.payload.email,
        loggedIn: true,
        name: action.payload.name
      };
    default:
      return state;
  }
};
