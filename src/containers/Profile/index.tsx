import { connect, Dispatch } from 'react-redux';
import * as appActions from '../../actions/appActions';
import Profile from '../../components/Profile';
import { UserData } from '../../models/interfaces';

export interface IStateToProps {
  appData: any;
  userData: UserData;
}

export interface IDispatchFromProps {
  getStreamKey: (payload: any) => void;
  changeImage: (payload: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  changeImage: (payload: any) => dispatch(appActions.changeImage(payload)),
  getStreamKey: (payload: any) => dispatch(appActions.getStreamKey(payload))
});
const mapStateToProps = (state: any) => ({
  appData: state.appData,
  userData: state.userData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  Profile as any
);
