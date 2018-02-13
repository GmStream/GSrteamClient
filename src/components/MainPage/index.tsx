import * as React from 'react';
import { UserData } from '../../models/interfaces';

export interface IProps {
  userData: UserData;
}

class MainPage extends React.PureComponent {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return <div>hello</div>;
  }
}

export default MainPage;
