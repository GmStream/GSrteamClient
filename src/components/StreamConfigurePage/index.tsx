import * as React from 'react';

import * as config from '../../config/';
import './styles/index.less';

import Chat from '../Chat';

import {
  connect,
  connectToChatRoom,
  disconnect,
  leaveChatRoom,
  sendRoomMessage,
  socket
} from '../../api/api';
export interface IProps {
  leaveStream: (payload: any) => void;
  emitMessage: (payload: any) => void;
  appData: any;
  history: {
    push: (url: string) => void;
  };
  userData: any;
}

class StreamConfigurePage extends React.PureComponent<IProps> {
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
      const startStreamButton: any = document.getElementById('NAVStreamLink');
      startStreamButton.classList.add('hidden');
    }
  }

  public componentDidMount() {
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');

    const container: any = document.getElementById('Pcontainer');
    container.appendChild(div);

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

  public componentWillUnmount() {
    // remove HDW player during component unmounting
    const player: any = document.getElementById('player');
    player.remove();

    const streamData = {
      id: this.props.appData.selectedStreamId
    };
    if (this.props.userData.loggedIn) {
      const socketData = {
        roomId: this.props.appData.selectedStreamId,
        user: this.props.userData.name
      };

      leaveChatRoom(socketData);
      disconnect();
      const startStreamButton: any = document.getElementById('NAVStreamLink');
      startStreamButton.classList.remove('hidden');
    }
  }

  public sendMessage(message: any) {
    const payload = { ...message, roomId: this.props.appData.selectedStreamId };
    sendRoomMessage(payload);
  }

  public render() {
    return (
      <div className="stream_page">
        <div id="Pcontainer" className="player_container" />
        <Chat
          emmitMessage={this.sendMessage.bind(this)}
          userName={this.props.userData.name}
          messages={this.props.appData.chatMessages}
        />
      </div>
    );
  }
}

export default StreamConfigurePage;
