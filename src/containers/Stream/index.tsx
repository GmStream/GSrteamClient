import { connect, Dispatch } from 'react-redux';
import StreamPage from '../../components/StreamPage';

import { UserData } from 'models/interfaces';
import * as appActions from '../../actions/appActions';
import * as chatActions from '../../actions/chatActions';

export interface IStateToProps {
  appData: any;
  userData: UserData;
}

export interface IDispatchFromProps {
  leaveStream: () => void;
  emitMessage: (payload: any) => void;
  checkStreaming:(payload:any) => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) =>({
  checkStreaming:(payload:any) => dispatch(appActions.checkStreaming(payload))
  emitMessage: (payload: any) => dispatch(chatActions.emitChatMessage(payload)),
  leaveStream: () => dispatch(appActions.leaveStream())
});

const mapStateToProps = (state: any) => ({
  appData: state.appData,
  userData: state.userData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  StreamPage as any
);
