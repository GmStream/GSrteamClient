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
    return this.props.messages.map((item: any, index) => (
      <div
        className={item.user === this.props.userName ? 'user_message' : 'chat_message'}
        key={'message' + index}
      >
        {item.message}
      </div>
    ));
  }
}
