import queryString from 'query-string';
import * as React from 'react';
import './styles/index.less';

import { Link } from 'react-router-dom';
import { checks, decodeToken, getSesionTokenFromLS } from '../../utils';

import { ConfPayload, SignInData, UserData } from '../../models/interfaces';

import { createCanvas, removeCanvas } from '../../utils/animation';

export interface IState {
  page: number;
  email: string;
  password: string;
}

export interface IProps {
  appData: any;
  signIn: (payload: SignInData) => void;
  location: {
    search: any;
  };
  userData: {
    loggedIn: boolean;
    name: string;
    email: string;
  };
  continueSession: (payload: UserData) => void;
  handleEmailConfirmation: (token: ConfPayload) => void;
  history: {
    push: (url: string) => void;
  };
  setUserData: (payload: any) => void;
}

class SignUpForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      page: 1,
      password: ''
    };
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.userData.loggedIn) {
      this.props.history.push('/main');
    }
  }

  public componentDidMount() {
    if (queryString.parse(this.props.location.search).token) {
      const token: string = queryString.parse(this.props.location.search).token;
      const payload: ConfPayload = {
        token
      };
      this.props.handleEmailConfirmation(payload);
    }
    const sessionToken: string | null = getSesionTokenFromLS();
    if (sessionToken) {
      const userData: UserData = decodeToken(sessionToken);
      this.props.setUserData(userData);
      this.props.continueSession(userData);
      this.props.history.push('/main');
    }

    createCanvas();
  }

  public componentWillUnmount() {
    removeCanvas();
  }

  public emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const isTrueFormat = checks.checkEmail(event.currentTarget.value);

    if (!isTrueFormat) {
      this.setState({
        ...this.state,
        email: event.currentTarget.value
      });
    } else {
      this.setState({
        ...this.state,
        email: event.currentTarget.value,
        page: 2
      });
    }
  };

  public passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const isTrueFormat = checks.checkPassword(event.currentTarget.value);

    if (!isTrueFormat) {
      this.setState({
        ...this.state,
        password: event.currentTarget.value
      });
    } else {
      this.setState({
        ...this.state,
        page: 3,
        password: event.currentTarget.value
      });
    }
  };

  public submit = () => {
    const payload: SignInData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signIn(payload);
  };

  public render() {
    const { page, password, email } = this.state;
    return (
      <div className="form_wrapper">
        <div className="greetings-container matrix">
          <p className="greetings">#welcome</p>
          <p className="greetings_message"> to the best streaming service</p>
        </div>
        <div className="logo" />
        <div className="sign_in_form">
          {this.props.appData.error && (
            <div className="error_container">{this.props.appData.error}</div>
          )}
          {page >= 1 && (
            <div>
              <p className="control has-icons-left">
                <input
                  name="email"
                  className="input blue_input"
                  type="email"
                  value={email}
                  onChange={this.emailChangeHandler.bind(this)}
                  placeholder="Email"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope-o" />
                </span>
              </p>
            </div>
          )}

          {page >= 2 && (
            <div>
              <p className="control has-icons-left">
                <input
                  name="password"
                  className="input blue_input"
                  type="password"
                  value={password}
                  onChange={this.passwordChangeHandler.bind(this)}
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-key" />
                </span>
              </p>
            </div>
          )}

          {page >= 3 && (
            <div className="submit_bar">
              <button className="button submit_button btn_blue" type="submit" onClick={this.submit}>
                Sign In
              </button>
            </div>
          )}
          <div className="link_bar">
            <Link to="/sign_up" className="form_link">
              create Gstream account
            </Link>
            {/* <Link to="/request_restore_pass" className="form_link">
              Have problem with sign in?
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
