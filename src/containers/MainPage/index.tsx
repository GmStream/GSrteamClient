import { connect, Dispatch } from 'react-redux';
import * as appActions from '../../actions/appActions';
import MainPage from '../../components/MainPage';

export interface IStateToProps {
  appData: any;
}

export interface IDispatchFromProps {
  joinStream: (channelId: string) => void;
  loadChannelsHandler: (payload: any) => void;
  loadMoreChannelsHandler: (payload: any) => void;
  clearChannelsData: () => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  clearChannelsData: () => dispatch(appActions.clearChannelsData()),
  joinStream: (channelId: string) => dispatch(appActions.selectChannel(channelId)),
  loadChannelsHandler: (payload: any) => dispatch(appActions.loadChannels(payload)),
  loadMoreChannelsHandler: (payload: any) => dispatch(appActions.loadMoreChannels(payload))
});

const mapStateToProps = (state: any) => ({
  appData: state.appData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  MainPage as any
);
