import { SIGN_IN_ERROR, SIGN_UP_ERROR } from '../actions/actionTypes';
import { SignUpActions } from '../actions/formActions';
import { formStateInitial } from '../models';

const initialState: formStateInitial = {};

export const formStateReducer = (
  state: formStateInitial = initialState,
  action: SignUpActions
): formStateInitial => {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return state;

    case SIGN_UP_ERROR:
      return state;

    default:
      return state;
  }
};
