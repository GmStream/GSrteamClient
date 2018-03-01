import * as React from 'react';

import { connect, Dispatch } from 'react-redux';
import StreamConfigurePage from '../../components/StreamConfigurePage';

import * as appActions from '../../actions/appActions';
import * as chatActions from '../../actions/chatActions';

export interface IStateToProps {
  appData: any;
  userData: any;
}

export interface IDispatchFromProps {
  startStream: (payload: any) => void;
  stopStream: (payload: any) => void;
  emitMessage: (payload: any) => void;
  leaveStream: (payload: any) => void;
  getStreamKey: (payload: any) => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  emitMessage: (payload: any) => dispatch(chatActions.emitChatMessage(payload)),
  getStreamKey: (payload: any) => dispatch(appActions.getStreamKey(payload)),
  leaveStream: (payload: any) => {
    dispatch(appActions.leaveStream());
    dispatch(appActions.stopStream(payload));
  },
  startStream: (payload: any) => dispatch(appActions.startStream(payload)),
  stopStream: (payload: any) => dispatch(appActions.stopStream(payload))
});

const mapStateToProps = (state: any) => ({
  appData: state.appData,
  userData: state.userData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  StreamConfigurePage as any
);
