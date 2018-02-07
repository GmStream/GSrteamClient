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

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignIn from './containers/SignIn/';
import SignUp from './containers/SignUp/';
import Stream from './containers/Stream';

declare var process: any;

class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="page-content">
          <Switch>
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/" component={SignIn} />
            <Route path="/stream" component={Stream} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

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
