import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { FromActions } from '../actions/formActions';
import * as api from '../api/api';

export function* signIn(action: FromActions): SagaIterator {
  try {
    const response: any = yield call(api.signIn, action.payload);
  } catch (e) {
    if (e.response.error) {
      yield put({
        payload: e.response.error,
        type: actionTypes.SIGN_IN_ERROR
      });
    } else {
      window.console.log(e);
    }
  }
}
