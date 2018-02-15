import * as React from 'react';

import * as config from '../../config/';
import './styles/index.less';

export interface IProps {
  leaveStream: () => void;
  appData: any;
}

class StreamConfigurePage extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');
    document.body.appendChild(div);
    const evalString = `
    hdwplayer({
      id       : 'player',
      swf      : '../hdwPlayer/player/player.swf',
      width    : '630',
      height   : '360',
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
    this.props.leaveStream();
  }

  public render() {
    return <div className="stream_page" />;
  }
}

export default StreamConfigurePage;
