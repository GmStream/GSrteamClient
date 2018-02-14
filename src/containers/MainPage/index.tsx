import { connect, Dispatch } from 'react-redux';
import * as appActions from '../../actions/appActions';
import MainPage from '../../components/MainPage';

export interface IStateToProps {
  appData: any;
}

export interface IDispatchFromProps {
  joinStream: (channelId: string) => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  joinStream: (channelId: string) => dispatch(appActions.selectChannel(channelId))
});

const mapStateToProps = (state: any) => ({
  appData: state.appData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  MainPage as any
);
