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

export class Footer extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    if (this.props.userData.loggedIn) {
      return (
        <footer className="footer footer_channel" role="navigation" aria-label="main navigation">
          <p>Gstream Inc. all rghts reserved,2018</p>
        </footer>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<appActions.appActions>) => ({
  logOut: () => dispatch(appActions.logOut())
});

const mapStateToProps = (state: any) => ({
  userData: state.userData
});

export default connect<IStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(
  Footer as any
);
