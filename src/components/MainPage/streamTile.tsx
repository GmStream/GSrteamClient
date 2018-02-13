import * as React from 'react';

export interface IStreamTileProps {
  tileHandler: (channelId: string) => void;
  channelName: string;
  channelDescription: string;
  profileImageLink: string;
  channelId: string;
}

const StreamTile = ({
  channelName,
  channelDescription,
  channelId,
  profileImageLink,
  tileHandler
}: IStreamTileProps) => {
  return (
    <div className="channel_tile">
      <div className="channel_name">{channelName}</div>
      <div className="tile_body">
        <div className="channel_image_container">
          <img src={profileImageLink} className="profile_img" />
        </div>
        <div className="description">{channelDescription}</div>
      </div>
      <button className="button" onClick={tileHandler.bind(this, channelId)}>
        watch
      </button>
    </div>
  );
};

export default StreamTile;
