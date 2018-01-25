import React from 'react';
import * as ReactDOM from 'react-dom';

import 'index.less';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

import SignUp from './containers/SignUp';

import Navbar from './components/Navbar';

import Footer from './components/Footer';

import SignUpForm from './components/SignUpForm/';

declare var process: any;

const App = () => (
  <div className="wrapper">
    <div className="page-content">
      <Navbar />
      <Switch>
        <Route exact path="/sign_up" component={SignUpForm} />
      </Switch>
      <Footer />
    </div>
  </div>
);

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const composeEnhansers = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools;
const store: Store<any> = createStore(
  rootReducer,
  initialState,
  composeEnhansers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
