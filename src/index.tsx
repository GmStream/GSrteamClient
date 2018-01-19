import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Hello from './Hello/';

import * as ReactDOM from 'react-dom';

declare var process: any;

const App = () => (
  <div className="wrapper">
    <div className="page-content">
      <Switch>
        <Route exact path="/" component={Hello} />
      </Switch>
    </div>
  </div>
);

ReactDOM.render(<Hello />, document.getElementById('app'));
