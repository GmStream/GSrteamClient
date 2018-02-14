import { Action, combineReducers, Reducer } from 'redux';

import { appDataReducer } from './appData';
import { formStateReducer } from './formState';
import { userDataReducer } from './userData';

// as any `cause redux have some troubles with typescript
export default combineReducers({
  appData: appDataReducer,
  formState: formStateReducer,
  userData: userDataReducer
} as any);
