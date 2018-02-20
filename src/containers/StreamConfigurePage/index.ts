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
  startStream: () => void;
  emitMessage: (payload: any) => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  emitMessage: (payload: any) => dispatch(chatActions.emitChatMessage(payload)),
  startStream: () => window.console.log('start stream')
});

const mapStateToProps = (state: any) => ({
  appData: state.appData,
  userData: state.userData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  StreamConfigurePage as any
);
