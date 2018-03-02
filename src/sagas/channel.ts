import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { appActions } from '../actions/appActions';
import * as api from '../api/api';

export function* loadChanels(action: appActions): SagaIterator {
  try {
    const response: any = yield call(api.loadChannels, action.payload);
    yield put({
      payload: response.data.channels,
      type: actionTypes.APP_REFRESH_CHANNELS_LIST
    });
  } catch (e) {
    if (e.response.error) {
      // here comes err action
    } else {
      window.console.log(e);
    }
  }
}

export function* changeImage(action: appActions): SagaIterator {
  try {
    const response: any = yield call(api.changeImage, action.payload);
    yield put({
      payload: response.data.image,
      type: actionTypes.UPDATE_USER_IMAGE
    });
  } catch (e) {
    if (e.response.error) {
      // here comes err action
    } else {
      window.console.log(e);
    }
  }
}
