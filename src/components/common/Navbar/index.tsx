import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as appActions from '../../../actions/appActions';
import { UserData } from '../../../models/interfaces';
import { removeSessionTokenFromLS } from '../../../utils';
import './styles/index.less';

export interface IProps {
  userData: UserData;
  logOut: () => void;
}
export interface IDispatchToProps {
  logOut: () => void;
}

export interface IStateToProps {
  userData: UserData;
}

export interface IState {
  isOpen: boolean;
}

class Navbar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  public openMenu() {
    this.setState({
      isOpen: true
    });
  }

  public closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  public render() {
    if (this.props.userData.loggedIn) {
      if (window.screen.width > 480) {
        return (
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="NAVbrand_container">
              <Link to="/main">
                <div className="NAVlogo" />
              </Link>
            </div>
            <div className="SB_container ">
              <Link to="/stream_configure" id="NAVStreamLink">
                <div className="SStart btn_flag">Stream Now</div>
              </Link>
            </div>
            <div className="user_profile">
              <Link to="/account" className="NAVlink btn_purple">
                My Account
              </Link>
              <button className="NAVbutton btn_blue " onClick={this.props.logOut}>
                Log Out
              </button>
            </div>
          </nav>
        );
      } else {
        return (
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="NAVbrand_container">
              <Link to="/main">
                <div className="NAVlogo" />
              </Link>
            </div>
            <div className="SB_container--collapsed">
              {!this.state.isOpen && (
                <button className="NAVbutton btn_blue " onClick={this.openMenu.bind(this)}>
                  Menu
                </button>
              )}
              {this.state.isOpen && (
                <button className="NAVbutton btn_blue " onClick={this.closeMenu.bind(this)}>
                  Close
                </button>
              )}
            </div>

            {this.state.isOpen && (
              <div className="collapsed_menu">
                <Link to="/account" className="collapsed_link">
                  My Account
                </Link>
                <button className="collapsed_button btn_blue" onClick={this.props.logOut}>
                  Log Out
                </button>
              </div>
            )}
          </nav>
        );
      }
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<appActions.appActions>) => ({
  logOut: () => {
    dispatch(appActions.logOut());
    removeSessionTokenFromLS();
  }
});

const mapStateToProps = (state: any) => ({
  userData: state.userData
});

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(
  Navbar as any
);
