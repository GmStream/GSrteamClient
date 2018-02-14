import * as React from 'react';
import { UserData } from '../../models/interfaces';

import Layout from './layout';
import StreamTile from './streamTile';

export interface IProps {
  history: {
    push: (url: string) => void;
  };
  joinStream: (channelId: string) => void;
}

class MainPage extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public tileHandler = (channelId: string) => {
    this.props.history.push(`/channel`);
    this.props.joinStream(channelId);
  };

  public render() {
    const mockedData = [
      {
        channelDescription:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 "de Finibus Bonorum et Malorum"',
        channelId: '5',
        channelName: 'bugagagaTV',
        profileImageLink:
          'https://vignette.wikia.nocookie.net/hellokitty/images/b/bb/Sanrio_Characters_Charmmy_Kitty_Image008.png/revision/latest?cb=20170402172228'
      },
      {
        channelDescription:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 "de Finibus Bonorum et Malorum"',
        channelId: '4',
        channelName: 'bugagagaTV',
        profileImageLink:
          'https://vignette.wikia.nocookie.net/hellokitty/images/b/bb/Sanrio_Characters_Charmmy_Kitty_Image008.png/revision/latest?cb=20170402172228'
      },
      {
        channelDescription:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular durin the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 "de Finibus Bonorum et Malorum"',
        channelId: '3',
        channelName: 'bugagagaTV',
        profileImageLink:
          'https://vignette.wikia.nocookie.net/hellokitty/images/b/bb/Sanrio_Characters_Charmmy_Kitty_Image008.png/revision/latest?cb=20170402172228'
      },
      {
        channelDescription:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 "de Finibus Bonorum et Malorum"',
        channelId: '2',
        channelName: 'bugagagaTV',
        profileImageLink:
          'https://vignette.wikia.nocookie.net/hellokitty/images/b/bb/Sanrio_Characters_Charmmy_Kitty_Image008.png/revision/latest?cb=20170402172228'
      }
    ];

    return (
      <div>
        <Layout tiles={mockedData} handler={this.tileHandler} />
      </div>
    );
  }
}

export default MainPage;
