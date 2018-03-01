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

  public componentDidMount() {
    const payload = {
      id: this.props.appData.selectedStreamId
    };
    this.props.checkStreaming(payload);
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');

    const container: any = document.getElementById('Pcontainer');
    container.appendChild(div);

    let screenWidth = window.screen.width;
    let height = screenWidth / 1.5;

    if (screenWidth > 768) {
      screenWidth = 630;
      height = 360;
    }

    // get id from local storage if !this.props.appData.selectedStreamId

    const evalString = `
    hdwplayer({
      id       : 'player',
      swf      : '../hdwPlayer/player/player.swf',
      width    : ${screenWidth},
      height   : ${height},
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
    if (this.props.userData.loggedIn) {
      leaveChatRoom(socketData);
      disconnect();
    }
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

export default StreamPage;
