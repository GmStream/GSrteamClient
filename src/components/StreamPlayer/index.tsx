import * as React from 'react';

import Video from './playerModule';

// export interface IProps {
//   sourceUrl: string;
// }

const Player = () => (
  <div className="app">
    <Video
      src="rtmp://192.168.14.132:1935/live/114"
      type="rtmp/mp4"
      onPlay={(player: any) => window.console.log('played', player)}
    />
  </div>
);

export default Player;
