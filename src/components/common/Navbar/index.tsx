import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as appActions from '../../../actions/appActions';
import { UserData } from '../../../models/interfaces';
import { removeSessionTokenFromLS } from '../../../utils';
import './styles/index.less';

export interface IProps {
  userData: UserData;
  startStream: () => void;
  logOut: () => void;
  goToProfile: () => void;
}
export interface IDispatchToProps {
  logOut: () => void;
}

export interface IStateToProps {
  userData: UserData;
}

class Navbar extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public statrtStream() {
    this.props.startStream();
  }

  public goToProfile() {
    this.props.goToProfile();
  }

  public render() {
    if (this.props.userData.loggedIn) {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="SB_container">
            <button className="SStart btn_flag" onClick={this.statrtStream.bind(this)}>
              Stream Now
            </button>
          </div>
          <div className="user_profile">
            <div className="image_container">
              <img src={this.props.userData.profileImageLink} className="profile_image" />
            </div>
            <button className="NAVbutton btn_purple" onClick={this.goToProfile.bind(this)}>
              My Account
            </button>
            <button className="NAVbutton btn_blue " onClick={this.props.logOut}>
              Log Out
            </button>
          </div>
        </nav>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<appActions.appActions>) => ({
  goToProfile: () => {
    // create app action which redirect to profile
  },
  logOut: () => {
    dispatch(appActions.logOut());
    removeSessionTokenFromLS();
  },
  startStream: () => {
    // crate start stream action
  }
});

const mapStateToProps = (state: any) => ({
  userData: state.userData
});

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(
  Navbar as any
);
