import * as React from 'react';
import { LIMIT_OF_CHANNELS } from '../../config';
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

  public componentWillReceiveProps(newProps: IProps) {
    if (!newProps.userData.loggedIn) {
      this.props.history.push('/');
    }
  }

  public componentWillMount() {
    if (!this.props.userData.loggedIn) {
      this.props.history.push('/');
    } else {
      this.props.loadChannelsHandler({ limit: LIMIT_OF_CHANNELS });
    }
  }

  public componentWillUnmount() {
    this.props.clearChannelsData();
  }

  public loadMore() {
    this.props.loadChannelsHandler({
      limit: LIMIT_OF_CHANNELS,
      skip: this.props.appData.channels.length
    });
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
          <div className="Mp_tiles_footer">
            <button className="load_more_button btn_purple" onClick={this.loadMore.bind(this)}>
              Load More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
