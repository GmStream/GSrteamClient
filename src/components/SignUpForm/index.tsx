import * as React from 'react';
import './styles/index.less';

import { Link } from 'react-router-dom';
import { checks } from '../../utils';

import { SignUpData } from '../../models/interfaces';

import { createCanvas, removeCanvas } from '../../utils/animation';

export interface IState {
  confirmPass: string;
  channelName: string;
  page: number;
  email: string;
  password: string;
  userName: string;
}

export interface IProps {
  appData: any;
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

  public componentDidMount() {
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
    this.setState({
      ...this.state,
      page: 6
    });
  };

  public cancel = () => {
    this.setState({
      ...this.state,
      page: 6
    });
  };

  public showModal = () => {
    this.setState({
      ...this.state,
      page: 7
    });
  };

  public render() {
    const { page, channelName, userName, password, confirmPass, email } = this.state;
    return (
      <div className="form_wrapper">
        {page < 7 && <div className="logo" />}
        {page < 7 && (
          <div className="join_container">
            Fill all fields to create an account.
            <p className="join">#Join us!</p>
          </div>
        )}
        {page < 7 && (
          <div className="sign_up_form">
            {this.props.appData.error && (
              <div className="error_container">{this.props.appData.error}</div>
            )}
            {this.props.appData.successData && (
              <div className="success_container">{this.props.appData.successData}</div>
            )}
            {page >= 1 && (
              <div>
                <p className="control has-icons-left">
                  <input
                    placeholder="Channel name"
                    name="channelname"
                    className="input blue_input"
                    type="text"
                    value={channelName}
                    onChange={this.channelNameOnChangeHandler.bind(this)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-address-card-o" />
                  </span>
                </p>
              </div>
            )}

            {page >= 2 && (
              <div>
                <p className="control has-icons-left">
                  <input
                    placeholder="Full name"
                    name="username"
                    className="input blue_input"
                    type="text"
                    value={userName}
                    onChange={this.userNameOnChangeHandler.bind(this)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" />
                  </span>
                </p>
              </div>
            )}

            {page >= 3 && (
              <div>
                <p className="control has-icons-left">
                  <input
                    placeholder="Email"
                    name="email"
                    className="input blue_input"
                    type="email"
                    value={email}
                    onChange={this.emailChangeHandler.bind(this)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope-o" />
                  </span>
                </p>
              </div>
            )}

            {page >= 4 && (
              <div>
                <p className="control has-icons-left">
                  <input
                    placeholder="Password"
                    name="password"
                    className="input blue_input"
                    type="text"
                    value={password}
                    onChange={this.passwordChangeHandler.bind(this)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-key" />
                  </span>
                </p>
              </div>
            )}

            {page >= 5 && (
              <div>
                <p className="control has-icons-left">
                  <input
                    placeholder="Confirm password"
                    name="confirm_password"
                    className="input blue_input"
                    type="text"
                    value={confirmPass}
                    onChange={this.confirmPassHandler.bind(this)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-key" />
                  </span>
                </p>
              </div>
            )}

            {page >= 6 && (
              <div className="submit_bar">
                <button
                  className="submit_button btn_blue sing_up_submit"
                  type="submit"
                  onClick={this.showModal}
                >
                  SignUp
                </button>
              </div>
            )}
            <div className="link_bar">
              <Link to="/" className="form_link">
                already have an account?
              </Link>
            </div>
          </div>
        )}

        {page >= 7 && (
          <div className="modal_submit">
            <ul>
              <li>User should never send his own stream key to others.</li>
              <li>
                Streaming aviable only over real time messaging protocol.We advice you to use OBS
                for share your schreen.
              </li>
              <li>Do not provoke other people, be polite.</li>
            </ul>
            <button className="button is-danger" type="submit" onClick={this.cancel}>
              Cancel
            </button>
            <button
              className="button btn_blue btn_modal_submit"
              type="submit"
              onClick={this.submit}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SignUpForm;
