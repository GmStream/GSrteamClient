import * as React from 'react';
import { UserData } from '../../models/interfaces';

import Layout from './layout';
import StreamTile from './streamTile';

import './styles/index.less';

export interface IProps {
  appData: any;
  history: {
    push: (url: string) => void;
  };
  joinStream: (channelId: string) => void;
  loadChannelsHandler: (payload: any) => void;
  loadMoreChannelsHandler: (payload: any) => void;
  clearChannelsData: () => void;
  userData: UserData;
}

class MainPage extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public tileHandler = (channelId: string) => {
    this.props.history.push(`/channel`);
    this.props.joinStream(channelId);
  };

  public componentWillMount() {
    if (!this.props.userData.loggedIn) {
      this.props.history.push('/');
    }
  }

  public componentDidMount() {
    this.props.loadChannelsHandler({ limit: 10 });
  }

  public componentWillUnmount() {
    this.props.clearChannelsData();
  }

  public render() {
    return (
      <div className="Mp_wrapper">
        <div className="Mp_header">
          <div className="decoration" />
          here something will be
        </div>
        <div className="Mp_tiles">
          <div className="Mp_tiles_header" />
          <div className="tiles_container">
            <Layout tiles={this.props.appData.channels} handler={this.tileHandler} />
          </div>
          <div className="Mp_tiles_footer" />
        </div>
      </div>
    );
  }
}

export default MainPage;
