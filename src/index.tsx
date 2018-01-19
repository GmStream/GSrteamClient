import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import * as ReactDOM from 'react-dom';

declare var process: any;

const App = () => (
  <div className="wrapper">
    <div className="page-content">
      <Switch>{/* here comes routes */}</Switch>
    </div>
  </div>
);

ReactDOM.render(<h1>dfgdfgdfgdfg</h1>, document.getElementById('app'));

//   <BrowserRouter>
//     <Provider store={}>
//       <Route component={} />
//     </Provider>
//   </BrowserRouter>,
