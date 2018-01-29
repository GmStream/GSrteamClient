import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { signUp } from '../actions/formActions';
import * as signUpSagas from './singUp';

export function* signUpWatcher(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, signUpSagas.signUp);
}
