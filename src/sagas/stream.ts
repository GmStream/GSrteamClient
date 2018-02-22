import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as api from '../api/api';

export function* startStream(action: any): SagaIterator {
  try {
    const response: any = yield call(api.startStream, action.payload);
  } catch (e) {
    if (e.response.error) {
      // here comes err action
    } else {
      window.console.log(e);
    }
  }
}

export function* stopStream(action: any): SagaIterator {
  try {
    const response: any = yield call(api.sstopStream, action.payload);
  } catch (e) {
    if (e.response.error) {
      // here comes err action
    } else {
      window.console.log(e);
    }
  }
}
