import * as React from 'react';
import * as config from '../../config/';
import { UserData } from '../../models/interfaces';
import './styles/index.less';

import {
  connect,
  connectToChatRoom,
  disconnect,
  leaveChatRoom,
  sendRoomMessage,
  socket
} from '../../api/api';

import Chat from '../Chat';

export interface IProps {
  leaveStream: () => void;
  emitMessage: (payload: any) => void;
  appData: any;
  userData: any;
  history: {
    push: (url: string) => void;
  };
  checkStreaming: (payload: any) => void;
}

class StreamPage extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount() {
    if (!this.props.userData.loggedIn) {
      this.props.history.push('/');
    } else {
      connect();
      socket.on('message', (payload: any) => {
        const data = [payload];
        this.props.emitMessage(data);
        const chat: any = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
      });
      const socketData = {
        roomId: this.props.appData.selectedStreamId,
        user: this.props.userData.name
      };
      connectToChatRoom(socketData);
      // save to local storage id
    }
  }

  public componentWillReceiveProps(nextProps: any) {
    if (!nextProps.appData.isChannelLive) {
      const offlineBlock: any = document.getElementById('offline');
      offlineBlock.style = 'display:flex';
      const onlineBlock: any = document.getElementById('online');
      onlineBlock.style = 'display:none';
    } else if (nextProps.appData.isChannelLive) {
      const offlineBlock: any = document.getElementById('offline');
      offlineBlock.style = 'display:none';
      const onlineBlock: any = document.getElementById('online');
      onlineBlock.style = 'display:flex';
    }
  }

  public componentDidMount() {
    const payload = {
      id: this.props.appData.selectedStreamId
    };
    this.props.checkStreaming(payload);
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');

    const container: any = document.getElementById('Pcontainer');
    container.appendChild(div);

    // get id from local storage if !this.props.appData.selectedStreamId

    const evalString = `
    hdwplayer({
      id       : 'player',
      swf      : '../hdwPlayer/player/player.swf',
      type     : 'rtmp',
      streamer : '${config.STREAM_SERVER}',
      video    : '${this.props.appData.selectedStreamId}',
      autoStart: 'true'
    });
 `;
    // eval used for config HDW player

    // tslint:disable-next-line:no-eval
    eval(evalString);
  }

  public sendMessage(message: any) {
    const payload = { ...message, roomId: this.props.appData.selectedStreamId };
    sendRoomMessage(payload);
  }

  public componentWillUnmount() {
    // remove HDW player during component unmounting
    const player: any = document.getElementById('player');
    player.remove();
    this.props.leaveStream();
    const socketData = {
      roomId: this.props.appData.selectedStreamId,
      user: this.props.userData.name
    };

    leaveChatRoom(socketData);
    disconnect();
  }

  public render() {
    return (
      <div className="stream_page">
        <div id="online">
          <div className="stream_container">
            <h1 className="stream_name">{this.props.appData.streamName}</h1>
            <div id="Pcontainer" className="player_container" />
          </div>
          <Chat
            emmitMessage={this.sendMessage.bind(this)}
            userName={this.props.userData.name}
            messages={this.props.appData.chatMessages}
          />
        </div>

        <div id="offline">
          <h1>offline</h1>
        </div>
      </div>
    );
  }
}

export default StreamPage;
