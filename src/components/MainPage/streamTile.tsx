import * as React from 'react';

export interface IStreamTileProps {
  tileHandler: (channelId: string) => void;
  channelName: string;
  profileImageLink: string;
  channelId: string;
}

const StreamTile = ({
  channelName,
  channelId,
  profileImageLink,
  tileHandler
}: IStreamTileProps) => {
  return (
    <div className="channel_tile">
      <div className="channel_image_container">
        <img src={profileImageLink} className="profile_img" />
      </div>
      <div className="channel_name">{channelName}</div>
      <button className="button tile_play_button" onClick={tileHandler.bind(this, channelId)} />
    </div>
  );
};

export default StreamTile;
