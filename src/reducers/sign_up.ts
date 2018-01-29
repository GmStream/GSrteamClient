import { CHECK_CHANNEL_NAME, CHECK_USER_EMAIL, CHECK_USERNAME } from '../actions/actionTypes';
import { SignUpInitialState } from '../models';

const initialState: SignUpInitialState = {
  step: 1
};

const signUpReducer = (state: SignUpInitialState = initialState, action) => {
  switch (action.type) {
    case CHECK_CHANNEL_NAME:
      return state;

    case CHECK_USERNAME:
      return state;

    case CHECK_USER_EMAIL:
      return state;

    default:
      return state;
  }
};
