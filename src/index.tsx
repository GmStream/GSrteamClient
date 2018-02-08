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

import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import SignIn from './containers/SignIn/';
import SignUp from './containers/SignUp/';
import Stream from './containers/Stream';

declare var process: any;

class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    const canvas = document.createElement('canvas');
    const c: any = canvas.getContext('2d');
    const particles: any = {};
    let particleIndex = 0;
    const particleNum = 0.1;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'motion';
    document.body.appendChild(canvas);
    // Finished Creating Canvas
    // Setting color which is just one big square
    const myGradient: any = c.createLinearGradient(0, 0, 0, 170);
    myGradient.addColorStop(0, 'DarkTurquoise');
    myGradient.addColorStop(1, 'DodgerBlue');
    c.fillStyle = myGradient;
    c.fillRect(0, 0, canvas.width, canvas.height);
    // Finished Color
    // tslint:disable-next-line:variable-name
    const y_fourth = Math.floor(canvas.height / 4);
    // tslint:disable-next-line:variable-name
    const y_second_fourth = Math.floor(y_fourth * 2);

    const Particle: any = function() {
      // tslint:disable-next-line:variable-name
      const random_x = Math.floor(Math.random() * 0) + 1;
      // tslint:disable-next-line:variable-name
      const random_y = Math.floor(Math.random() * y_second_fourth + y_fourth) + 1;
      this.x = random_x;
      this.y = random_y;
      this.vx = Math.random() * 5 - 2;
      this.vy = Math.random() * 2 - 1;
      this.gravity = 0;
      particleIndex++;
      particles[particleIndex] = this;
      this.id = particleIndex;
      this.size = Math.random() * 6 - 2;
      this.color = 'hsla(0,0%,' + parseInt((Math.random() * 100) as any, 0) + '%,1)';
      this.color2 = 'hsla(360,100%,' + parseInt((Math.random() * 100) as any, 0) + '%,1)';
      this.color3 = 'hsla(210,100%,' + parseInt((Math.random() * 100) as any, 0) + '%,1)';
      this.color_selector = Math.random() * 150 - 1;
    };
    Particle.prototype.draw = function() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      if (this.x > canvas.width || this.y > canvas.height) {
        delete particles[this.id];
      }
      if (this.color_selector < 30 && this.color_selector > 10) {
        c.fillStyle = this.color2;
      } else if (this.color_selector < 10) {
        c.fillStyle = this.color3;
      } else {
        c.fillStyle = this.color;
      }
      c.fillRect(this.x, this.y, this.size, this.size);
    };
    setInterval(() => {
      c.fillStyle = myGradient;
      c.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleNum; i++) {
        const buffer: any = new Particle();
      }
      // tslint:disable-next-line:forin
      for (const i in particles) {
        particles[i].draw();
      }
    }, 30);
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
