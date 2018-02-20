import * as React from 'react';

import * as config from '../../config/';
import './styles/index.less';

export interface IProps {
  leaveStream: () => void;
  appData: any;
}

class StreamPage extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    const div = document.createElement(`div`);
    div.setAttribute('id', 'player');

    const container: any = document.getElementById('Pcontainer');
    container.appendChild(div);

    let screenWidth = window.screen.width;
    let height = screenWidth / 1.5;

    if (screenWidth > 630) {
      screenWidth = 630;
      height = 360;
    }

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

  public componentWillUnmount() {
    // remove HDW player during component unmounting
    const player: any = document.getElementById('player');
    player.remove();
    this.props.leaveStream();
  }

  public render() {
    return (
      <div className="stream_page">
        <div id="Pcontainer" className="player_container" />
      </div>
    );
  }
}

export default StreamPage;
