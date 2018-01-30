import { Action, combineReducers, Reducer } from 'redux';

import { appErrorReducer } from './appError';
import { formStateReducer } from './formState';

// as any `cause redux have some troubles with typescript
export default combineReducers({
  appErrors: appErrorReducer,
  formState: formStateReducer
} as any);
