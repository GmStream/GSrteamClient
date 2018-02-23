import * as React from 'react';
import { UserData } from '../../models/interfaces';

import MessageBubles from './messageBubles';

import './styles/index.less';

export interface IProps {
  emmitMessage: (payload: any) => void;
  messages: any[];
  userName: string;
}

export interface IState {
  draftMessage: string;
}

export class Chat extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      draftMessage: ''
    };
  }

  public inputHandler(elemnt: any) {
    this.setState({
      draftMessage: elemnt.target.value
    });
  }

  public sendMessage() {
    const payload = {
      message: this.state.draftMessage,
      user: this.props.userName
    };
    this.props.emmitMessage(payload);
  }

  public render() {
    return (
      <div className="chat_container">
        <div className="chat">
          <MessageBubles userName={this.props.userName} messages={this.props.messages} />
        </div>
        <div className="input_box">
          <input
            type="text"
            className="MInput"
            onChange={this.inputHandler.bind(this)}
            value={this.state.draftMessage}
            onKeyPress={(event: any) => {
              if (event.key === 'Enter') {
                this.sendMessage.bind(this)();
              }
            }}
          />
          <button className="send_button" onClick={this.sendMessage.bind(this)}>
            send
          </button>
        </div>
      </div>
    );
  }
}

export default Chat;
