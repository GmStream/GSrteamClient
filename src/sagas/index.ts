import { fork } from 'redux-saga/effects';
import * as watchers from './watchers';

function* rootSaga() {
  yield [fork(watchers.signUpWatcher)];
  yield [fork(watchers.signInWatcher)];
  yield [fork(watchers.confrimWather)];
}

export default rootSaga;
