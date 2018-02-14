import { connect, Dispatch } from 'react-redux';
import StreamPage from '../../components/StreamPage';

import * as appActions from '../../actions/appActions';

export interface IStateToProps {
  appData: any;
}

export interface IDispatchFromProps {
  leaveStream: () => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  leaveStream: () => dispatch(appActions.leaveStream())
});

const mapStateToProps = (state: any) => ({
  appData: state.appData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  StreamPage as any
);
