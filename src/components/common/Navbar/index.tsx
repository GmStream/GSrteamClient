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
        <div className="navbar_controlls">
          <Link to="/">Sign In</Link>
          <Link to="/sign_up">Sign Up</Link>
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

// fix types
export default connect(mapDispatchToProps, mapDispatchToProps)(Navbar as any);
