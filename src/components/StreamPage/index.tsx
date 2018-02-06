import * as React from 'react';
import Player from '../StreamPlayer';

import './styles/index.less';

export interface IProps {
  joinStreamHandler: (userId: string) => void;
}

export interface IState {
  isStreaming: boolean;
}

class StreamPage extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isStreaming: false
    };
  }
  public render() {
    return (
      <div className="stream_page">
        <Player />
      </div>
    );
  }
}

export default StreamPage;
