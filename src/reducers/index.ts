import { Action, combineReducers, Reducer } from 'redux';

import { formStateReducer } from './formState';

// as any `cause redux have some troubles with typescript
export default combineReducers({
  // here will be all reducers
  formState: formStateReducer
} as any);
