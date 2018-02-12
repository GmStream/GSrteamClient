import { SIGN_IN_SUCCES } from '../actions/actionTypes';
import { appActions } from '../actions/appActions';
import { userState } from '../models';

const initialState: userState = {};

export const formStateReducer = (
  state: userState = initialState,
  action: appActions
): userState => {
  switch (action.type) {
    case SIGN_IN_SUCCES:
      return state;
    default:
      return state;
  }
};
