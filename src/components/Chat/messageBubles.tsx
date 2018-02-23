import * as React from 'react';

export interface IMess {
  user: string;
  message: string;
}

export type Message = IMess;

export interface IProps {
  messages: Message[];
  userName: string;
}

export default class MessageBubles extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  public render() {
    const messages = this.props.messages.map((item: any, index) => (
      <div
        className={item.user === this.props.userName ? 'user_message' : 'chat_message'}
        key={'message' + index}
      >
        <div className="message_container">
          <div className="message">
            <p className="UName">{item.user ? item.user + ':' : ''}</p>
            <div className="message_text">{item.message}</div>
          </div>
        </div>
      </div>
    ));

    return messages.reverse();
  }
}
