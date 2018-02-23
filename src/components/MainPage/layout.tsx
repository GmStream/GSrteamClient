import * as React from 'react';

import StreamTile from './streamTile';

export interface IProps {
  tiles: any[];
  handler: (id: string) => void;
}

class Layout extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return this.props.tiles.map((channel: any) => {
      return (
        <StreamTile
          channelName={channel.channelName}
          channelId={channel._id}
          profileImageLink={channel.profileImageLink}
          tileHandler={this.props.handler}
          key={'tile' + channel._id}
        />
      );
    });
  }
}

export default Layout;
