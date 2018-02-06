import { connect, Dispatch } from 'react-redux';
import { FromActions } from '../../actions/formActions';
import { signUp } from '../../actions/formActions';
import SignUpForm from '../../components/SignUpForm';
import { SignUpData } from '../../models/interfaces';

export interface IStateToProps {
  formState: any;
}

export interface IDispatchFromProps {
  signUp: (payload: SignUpData) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<FromActions>) => ({
  signUp: (payload: SignUpData) => {
    dispatch(signUp(payload));
  }
});

const mapStateToProps = (state: any) => ({
  formState: state.formState
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  SignUpForm as any
);
