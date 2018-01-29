import { fork } from 'redux-saga/effects';
import * as watchers from './watchers';

function* rootSaga() {
  yield [fork(watchers.signUpWatcher)];
}

export default rootSaga;
