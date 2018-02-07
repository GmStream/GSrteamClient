import * as React from 'react';

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

  public componentDidMount() {
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');
    document.body.appendChild(div);
    // streamer is constant but video will be geted from url path
    const streamer = `rtmp://IP:PORT/live`;
    const video = `114`;
    const evalString = `
    hdwplayer({ 
      id       : 'player',
      swf      : 'hdwPlayer/player/player.swf',
      width    : '630',
      height   : '360',
      type     : 'rtmp',
      streamer : '${streamer}',
      video    : '${video}',
      autoStart: 'true'
    });
 `;
    // eval used for config hdwplayer
    // tslint:disable-next-line:no-eval
    eval(evalString);
  }

  public render() {
    return <div className="stream_page" />;
  }
}

export default StreamPage;
