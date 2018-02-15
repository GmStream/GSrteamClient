import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as appActions from '../../../actions/appActions';
import { UserData } from '../../../models/interfaces';
import './styles/index.less';

export interface IProps {
  userData: UserData;
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

  public render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="user_profile">
          <div className="image_container">
            <img src={this.props.userData.profileImageLink} className="profile_image" />
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<appActions.appActions>) => ({
  logOut: () => dispatch(appActions.logOut())
});

const mapStateToProps = (state: any) => ({
  userData: state.userData
});

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(
  Navbar as any
);
