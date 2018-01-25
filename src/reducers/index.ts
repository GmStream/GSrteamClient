import { Action, combineReducers, Reducer } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  // here will be all reducers
  form: reduxFormReducer
});
