import * as React from 'react';

import './styles/index.less';

export interface IProps {
  userData: any;
  appData: any;
  changeStreamKey: (payload: any) => any;
  changeImage: (payload: any) => void;
  getStreamKey: (payload: any) => void;
}

export default class Profile extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount() {
    const userPayload = {
      email: this.props.userData.email
    };
    this.props.getStreamKey(userPayload);
  }

  public uploadImage(event: any) {
    const reader = new FileReader();
    const change = this.props.changeImage;
    const id = this.props.appData.selectedStreamId;

    reader.onload = (e: any) => {
      const payload = {
        id,
        image: e.target.result
      };

      change(payload);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  public handleFileInput() {
    const input: any = document.getElementById('files');
    input.click();
  }

  public render() {
    return (
      <div className="profile_wrapper">
        <div className="data_container">
          <div className="img_prof">
            <img
              src={this.props.userData.profileImageLink}
              alt="profile"
              className="profile_image"
            />
            <div className="file_upload">
              <button type="button" onClick={this.handleFileInput}>
                Choose
              </button>
              <input type="file" id="files" onChange={this.uploadImage.bind(this)} />
            </div>
          </div>
          <div className="user_data">
            <p className="user_name"> {this.props.userData.name}</p>
            <p className="user_email">{this.props.userData.email}</p>
          </div>
          <div className="streamInfo">
            Stream Key:
            <div className="stream_key">{this.props.appData.selectedStreamId}</div>
            {/* <button className="change_stream_key_btn">Change key</button> */}
          </div>
        </div>
      </div>
    );
  }
}
