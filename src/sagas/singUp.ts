import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { FromActions } from '../actions/formActions';
import * as api from '../api/api';

export function* signUp(action: FromActions): SagaIterator {
  try {
    const response: any = yield call(api.signUp, action.payload);
  } catch (e) {
    if (e.response.error) {
      yield put({
        payload: e.response.error,
        type: actionTypes.SIGN_UP_ERROR
      });
    } else {
      window.console.log(e);
    }
  }
}

export function* confirmation(action: FromActions): SagaIterator {
  try {
    const response: any = yield call(api.confirm, action.payload);
  } catch (e) {
    if (e.response.error) {
      yield put({
        payload: e.response.error,
        type: actionTypes.USER_CONFIRMATION_ERROR
      });
    } else {
      window.console.log(e);
    }
  }
}
