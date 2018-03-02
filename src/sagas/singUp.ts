import { delay, SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { FormActions } from '../actions/formActions';
import * as api from '../api/api';

export function* signUp(action: FormActions): SagaIterator {
  try {
    const response: any = yield call(api.signUp, action.payload);
    if (response.status === 200) {
      yield put({
        payload: 'Check your email for confirmation',
        type: actionTypes.SIGN_UP_SUCCES
      });
      yield delay(5000) as any;
      yield put({
        type: actionTypes.CLEAR_SUCCESS_DATA
      });
    }
  } catch (e) {
    if (e.response.error) {
      yield put({
        payload: e.response.error,
        type: actionTypes.SIGN_UP_ERROR
      });
    } else {
      if (e.response.status === 422) {
        yield put({
          payload: e.response.data.Error,
          type: actionTypes.SIGN_IN_ERROR
        });
        yield delay(5000) as any;
        yield put({
          type: actionTypes.CLEAR_ERROR
        });
      } else {
        window.console.log(e);
      }
    }
  }
}

export function* confirmation(action: FormActions): SagaIterator {
  try {
    const response: any = yield call(api.confirm, action.payload);
  } catch (e) {
    if (e.response.error) {
      yield put({
        payload: e.response.data.Error,
        type: actionTypes.USER_CONFIRMATION_ERROR
      });
      yield delay(5000) as any;
      yield put({
        type: actionTypes.CLEAR_ERROR
      });
    } else {
      window.console.log(e);
    }
  }
}
