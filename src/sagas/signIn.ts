import { delay, SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { FormActions } from '../actions/formActions';
import * as api from '../api/api';
import { decodeToken, saveSessionTokeToLS } from '../utils';

export function* signIn(action: FormActions): SagaIterator {
  try {
    const response: any = yield call(api.signIn, action.payload);
    if (response.data.token && response.status === 200) {
      try {
        const decodedData = decodeToken(response.data.token);
        saveSessionTokeToLS(response.data.token);
        yield put({
          payload: decodedData,
          type: actionTypes.SIGN_IN_SUCCES
        });
      } catch (decodeError) {
        window.console.log(decodeError);
      }
    }
  } catch (e) {
    if (e.response.status === 422) {
      yield put({
        payload: 'Wrong password or email',
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
