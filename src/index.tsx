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
import Main from './containers/MainPage';
import SignIn from './containers/SignIn/';
import SignUp from './containers/SignUp/';
import Stream from './containers/Stream';

declare var process: any;

class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    // create and configure canvas

    const canvas = document.createElement('canvas');
    const c: any = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'motion';
    document.body.appendChild(canvas);
    const numStars = 2000;
    const FPS = 40;
    const stars: any = [];

    c.fillRect(0, 0, canvas.width, canvas.height);

    const Star: any = function(x: any, y: any, length: any, opacity: any) {
      this.x = parseInt(x, 0);
      this.y = parseInt(y, 0);
      this.length = parseInt(length, 0);
      this.opacity = opacity;
      this.factor = 1;
      this.increment = Math.random() * 0.03;
      this.vx = Math.random() * 5 - 2;
      this.vy = Math.random() * 2 - 1;
    };

    // draw a star

    Star.prototype.draw = function() {
      c.rotate(Math.PI * 1 / 10);

      // move star
      this.x += this.vx;
      this.y += this.vy;

      // dave the context
      c.save();

      // move into the middle of the canvas, just to make room
      c.translate(this.x, this.y);

      // change the opacity
      if (this.opacity > 1) {
        this.factor = -1;
      } else if (this.opacity <= 0) {
        this.factor = 1;

        this.x = Math.round(Math.random() * canvas.width);
        this.y = Math.round(Math.random() * canvas.height);
      }

      this.opacity += this.increment * this.factor;

      c.beginPath();
      for (let i = 5; i--; ) {
        c.lineTo(0, this.length);
        c.translate(0, this.length);
        c.rotate(Math.PI * 2 / 10);
        c.lineTo(0, -this.length);
        c.translate(0, -this.length);
        c.rotate(-(Math.PI * 6 / 10));
      }
      c.lineTo(0, this.length);
      c.closePath();
      c.fillStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
      c.shadowBlur = 5;
      c.shadowColor = 'white';
      c.fill();

      c.restore();
    };

    for (let i = 0; i < numStars; i++) {
      const x = Math.round(Math.random() * canvas.width);
      const y = Math.round(Math.random() * canvas.height);
      const length = 1 + Math.random() * 2;
      const opacity = Math.random();

      // create a new star and draw
      const star = new Star(x, y, length, opacity);

      // add the the stars array
      stars.push(star);
    }

    function animate() {
      c.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star: any) => {
        star.draw(c);
      });
    }

    setInterval(animate, 1000 / FPS);
  }

  public render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="page-content">
          <Switch>
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/" component={SignIn} />
            <Route path="/channel" component={Stream} />
            <Route path="/main" component={Main} />
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
