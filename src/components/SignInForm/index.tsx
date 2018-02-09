import queryString from 'query-string';
import * as React from 'react';
import './styles/index.less';

import { Link } from 'react-router-dom';
import * as checks from '../../utils';

import { ConfPayload, SignInData } from '../../models/interfaces';

export interface IState {
  page: number;
  email: string;
  password: string;
}

export interface IProps {
  signIn: (payload: SignInData) => void;
  location: {
    search: any;
  };
  handleEmailConfirmation: (token: ConfPayload) => void;
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

  public componentDidMount() {
    if (queryString.parse(this.props.location.search).token) {
      const token: string = queryString.parse(this.props.location.search).token;
      const payload: ConfPayload = {
        token
      };
      this.props.handleEmailConfirmation(payload);
    }
    // hide navbar
    let result = document.getElementsByClassName('navbar');
    const navbar: any = result[0];
    navbar.style.display = 'none';

    result = document.getElementsByClassName('footer');
    const footer: any = result[0];
    footer.style['background-color'] = 'transparent';
  }

  public componentWillUnmount() {
    // return navbar
    const result = document.getElementsByClassName('navbar');
    const navbar: any = result[0];
    navbar.style.display = 'flex';
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
          <p className="greetings_message"> to best streaming service</p>
        </div>
        <div className="logo" />
        <div className="sign_in_form">
          {page >= 1 && (
            <div>
              <p className="control has-icons-left">
                <input
                  name="email"
                  className="input blue_input"
                  type="email"
                  value={email}
                  onChange={this.emailChangeHandler.bind(event)}
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
                  onChange={this.passwordChangeHandler.bind(event)}
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
              <button className="button submit_blue_button" type="submit" onClick={this.submit}>
                Sign In
              </button>
            </div>
          )}
          <div className="link_bar">
            <Link to="/signup" className="form_link">
              create Gstream account
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
