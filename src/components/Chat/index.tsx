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
          <MessageBubles
            userName={this.props.userName}
            messages={[
              { message: '1', user: 'sds' },
              { message: '2', user: 'sds' },
              { message: '3', user: 'sds' },
              { message: '4', user: 'sds' },
              { message: '5', user: 'sds' },
              { message: '6', user: 'sds' },
              { message: '7', user: 'sds' },
              { message: '8', user: 'sds' },
              { message: '9', user: 'sds' },
              { message: '10', user: 'sds' },
              { message: '11', user: 'sds' },
              { message: '12', user: 'sds' },
              { message: '13', user: 'sds' },
              { message: '14', user: 'sds' },
              { message: '15', user: 'sds' },
              { message: '16', user: 'sds' },
              { message: '17', user: 'sds' },
              { message: '18', user: 'sds' },
              { message: '19', user: 'sds' },
              { message: '20', user: 'sds' },
              { message: '21', user: 'sds' },
              { message: '22', user: 'sds' },
              { message: '23', user: 'sds' },
              { message: '24', user: 'sds' },
              { message: '25', user: 'sds' },
              { message: '26', user: 'sds' },
              { message: '27', user: 'sds' },
              { message: '28', user: 'sds' },
              { message: '29', user: 'sds' },
              { message: '30', user: 'sds' },
              { message: '31', user: 'sds' },
              { message: '32', user: 'sds' },
              { message: '33', user: 'sds' },
              { message: '34', user: 'sds' },
              { message: '35', user: 'sds' },
              { message: '36', user: 'sds' },
              { message: '37', user: 'sds' },
              { message: '38', user: 'sds' },
              { message: '39', user: 'sds' },
              { message: '40', user: 'sds' }
            ]}
          />
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
