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
  startStream: (payload: any) => void;
  stopStream: (payload: any) => void;
  getStreamKey: (payload: any) => void;
  userData: any;
}

export interface IState {
  isStreamStarted: boolean;
  streamName: string;
}

class StreamConfigurePage extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isStreamStarted: false,
      streamName: ''
    };
  }

  public componentWillReceiveProps(nextProps: any) {
    if (
      nextProps.appData.selectedStreamId !== this.props.appData.selectedStreamId &&
      nextProps.appData.selectedStreamId !== '' &&
      nextProps.appData.selectedStreamId
    ) {
      const socketData = {
        roomId: nextProps.appData.selectedStreamId,
        user: this.props.userData.name
      };
      connectToChatRoom(socketData);

      socket.on('message', (payload: any) => {
        const data = [payload];
        this.props.emitMessage(data);
        const chat: any = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight;
      });

      const evalString = `
      hdwplayer({
        id       : 'player',
        swf      : '../hdwPlayer/player/player.swf',
        type     : 'rtmp',
        streamer : '${config.STREAM_SERVER}',
        video    : '${nextProps.appData.selectedStreamId}',
        autoStart: 'true'
      });
   `;
      // eval used for config HDW player

      // tslint:disable-next-line:no-eval
      eval(evalString);
    }
  }

  public componentWillMount() {
    if (!this.props.userData.loggedIn) {
      this.props.history.push('/');
    } else {
      connect();
      const userPayload = {
        email: this.props.userData.email
      };
      this.props.getStreamKey(userPayload);

      const startStreamButton: any = document.getElementById('NAVStreamLink');
      startStreamButton.classList.add('hidden');
    }
  }

  public componentDidMount() {
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');

    const container: any = document.getElementById('Pcontainer');
    container.appendChild(div);
  }

  public componentWillUnmount() {
    // remove HDW player during component unmounting
    const player: any = document.getElementById('player');
    player.remove();
    const payload = {
      id: this.props.appData.selectedStreamId
    };
    this.props.leaveStream(payload);

    const socketData = {
      roomId: this.props.appData.selectedStreamId,
      user: this.props.userData.name
    };

    leaveChatRoom(socketData);
    disconnect();
    const startStreamButton: any = document.getElementById('NAVStreamLink');
    startStreamButton.classList.remove('hidden');
  }

  public changeStreamName(event: any) {
    this.setState({
      ...this.state,
      streamName: event.target.value
    });
  }

  public startStream() {
    this.setState({
      ...this.state,
      isStreamStarted: true
    });
    const payload = {
      id: this.props.appData.selectedStreamId,
      name: this.state.streamName
    };
    this.props.startStream(payload);
  }

  public stopStream() {
    this.setState({
      ...this.state,
      isStreamStarted: false
    });
    const paylaod = {
      id: this.props.appData.selectedStreamId
    };
    this.props.stopStream(paylaod);
  }

  public sendMessage(message: any) {
    const payload = { ...message, roomId: this.props.appData.selectedStreamId };
    sendRoomMessage(payload);
  }

  public render() {
    return (
      <div className="stream_page">
        <div className="stream_conf_container">
          {!this.state.isStreamStarted && (
            <input
              className="stream_name_input black_input"
              placeholder="input stream name"
              type="text"
              onChange={this.changeStreamName.bind(this)}
              value={this.state.streamName}
              disabled={this.state.isStreamStarted}
            />
          )}

          {this.state.isStreamStarted && <h1 className="stream_name">{this.state.streamName}</h1>}

          <div className="controlls_container">
            <button
              className="stream_start btn_blue"
              onClick={this.startStream.bind(this)}
              disabled={this.state.isStreamStarted}
            >
              Start stream
            </button>
            <button
              className="stop_stream btn_purple"
              onClick={this.stopStream.bind(this)}
              disabled={!this.state.isStreamStarted}
            >
              Stop stream
            </button>
          </div>
          <div className="player_container ">
            <div id="Pcontainer" />
          </div>
        </div>

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
