import * as React from 'react';
import './styles/index.less';

import { Link } from 'react-router-dom';
import * as checks from '../../utils';

import { SignInData } from '../../models/interfaces';

export interface IState {
  page: number;
  email: string;
  password: string;
}

export interface IProps {
  signIn: (payload: SignInData) => void;
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
        <div className="sign_in_form">
          {page >= 1 && (
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

          {page >= 2 && (
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

          {page >= 3 && (
            <div className="submit_bar">
              <button className="button is-primary" type="submit" onClick={this.submit}>
                SignUp
              </button>
            </div>
          )}
          <div className="link_bar">
            <Link to="/signup" className="form_link">
              register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
