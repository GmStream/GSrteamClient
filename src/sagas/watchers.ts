import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { signUp } from '../actions/formActions';
import * as channelSagas from './channel';
import * as signInSagas from './signIn';
import * as signUpSagas from './singUp';
import * as streamSagas from './stream';

export function* signUpWatcher(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, signUpSagas.signUp);
}

export function* signInWatcher(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_IN, signInSagas.signIn);
}

export function* confrimWather(): SagaIterator {
  yield takeEvery(actionTypes.USER_CONFIRMATION, signUpSagas.confirmation);
}

export function* streamWatcher(): SagaIterator {
  yield takeEvery(actionTypes.START_STREAM, streamSagas.startStream);
  yield takeEvery(actionTypes.STOP_STREAM, streamSagas.stopStream);
  yield takeEvery(actionTypes.GET_STREAM_KEY, streamSagas.getStreamKey);
  yield takeEvery(actionTypes.CHECK_STREAM, streamSagas.check);
}

export function* channelWatcher(): SagaIterator {
  yield takeEvery(actionTypes.APP_LOAD_CHANNELS, channelSagas.loadChanels);
}
