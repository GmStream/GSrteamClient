import { connect, Dispatch } from 'react-redux';
import StreamPage from '../../components/StreamPage';

export interface IStateToProps {
  formState: any;
}

export interface IDispatchFromProps {
  joinStreamHandler: (userId: string) => void;
}

// replace any with actions type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  joinStreamHandler: (userId: string) => {
    window.console.log(userId + 'joined to stream');
  }
});

const mapStateToProps = (state: any) => ({
  formState: state.formState
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  StreamPage as any
);
