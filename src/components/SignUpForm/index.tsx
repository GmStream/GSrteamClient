import * as React from 'react';
import './styles/index.less';

import { Link } from 'react-router-dom';
import * as checks from '../../utils';

import { SignUpData } from '../../models/interfaces';

export interface IState {
  confirmPass: string;
  channelName: string;
  page: number;
  email: string;
  password: string;
  userName: string;
}

export interface IProps {
  signUp: (payload: SignUpData) => void;
}

class SignUpForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      channelName: '',
      confirmPass: '',
      email: '',
      page: 1,
      password: '',
      userName: ''
    };
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
        page: 4
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
        page: 5,
        password: event.currentTarget.value
      });
    }
  };

  public confirmPassHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === this.state.password) {
      this.setState({
        ...this.state,
        confirmPass: event.currentTarget.value,
        page: 6
      });
    } else {
      this.setState({
        ...this.state,
        confirmPass: event.currentTarget.value
      });
    }
  };

  public channelNameOnChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const isTrueFormat = checks.checkChannelName(event.currentTarget.value);

    if (!isTrueFormat) {
      this.setState({
        ...this.state,
        channelName: event.currentTarget.value
      });
    } else {
      this.setState({
        ...this.state,
        channelName: event.currentTarget.value,
        page: 2
      });
    }
  };

  public userNameOnChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const isTrueFormat = checks.checkUserName(event.currentTarget.value);

    if (!isTrueFormat) {
      this.setState({
        ...this.state,
        userName: event.currentTarget.value
      });
    } else {
      this.setState({
        ...this.state,
        page: 3,
        userName: event.currentTarget.value
      });
    }
  };

  public submit = () => {
    const payload: SignUpData = {
      channelName: this.state.channelName,
      email: this.state.email,
      name: this.state.userName,
      password: this.state.password
    };
    this.props.signUp(payload);
  };

  public render() {
    const { page, channelName, userName, password, confirmPass, email } = this.state;
    return (
      <div className="form_wrapper">
        <div className="sign_up_form">
          {page >= 1 && (
            <div>
              <label className="label">Channel Name:</label>
              <p className="control has-icons-left">
                <input
                  name="channelname"
                  className="input"
                  type="text"
                  value={channelName}
                  onChange={this.channelNameOnChangeHandler.bind(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-address-card-o" />
                </span>
              </p>
            </div>
          )}

          {page >= 2 && (
            <div>
              <label className="label">Full Name:</label>
              <p className="control has-icons-left">
                <input
                  name="username"
                  className="input"
                  type="text"
                  value={userName}
                  onChange={this.userNameOnChangeHandler.bind(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" />
                </span>
              </p>
            </div>
          )}

          {page >= 3 && (
            <div>
              <label className="label">Email:</label>
              <p className="control has-icons-left">
                <input
                  name="email"
                  className="input"
                  type="email"
                  value={email}
                  onChange={this.emailChangeHandler.bind(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope-o" />
                </span>
              </p>
            </div>
          )}

          {page >= 4 && (
            <div>
              <label className="label">Password:</label>
              <p className="control has-icons-left">
                <input
                  name="password"
                  className="input"
                  type="text"
                  value={password}
                  onChange={this.passwordChangeHandler.bind(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-key" />
                </span>
              </p>
            </div>
          )}

          {page >= 5 && (
            <div>
              <label className="label">Confirm Password:</label>
              <p className="control has-icons-left">
                <input
                  name="confirm_password"
                  className="input"
                  type="text"
                  value={confirmPass}
                  onChange={this.confirmPassHandler.bind(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-key" />
                </span>
              </p>
            </div>
          )}

          {page >= 6 && (
            <div className="submit_bar">
              <button className="button is-primary" type="submit" onClick={this.submit}>
                SignUp
              </button>
            </div>
          )}
          <div className="link_bar">
            <Link to="/signin" className="form_link">
              already heve an account?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
