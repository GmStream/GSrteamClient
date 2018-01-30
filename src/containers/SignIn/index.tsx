import { connect, Dispatch } from 'react-redux';
import { FromActions } from '../../actions/formActions';
import { emailConfirmation, signIn } from '../../actions/formActions';
import SignInForm from '../../components/SignInForm';
import { ConfPayload, SignInData } from '../../models/interfaces';

export interface IStateToProps {
  formState: any;
}

export interface IDispatchFromProps {
  handleEmailConfirmation: (payload: ConfPayload) => void;
  signIn: (payload: SignInData) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<FromActions>) => ({
  handleEmailConfirmation: (payload: ConfPayload) => dispatch(emailConfirmation(payload)),
  signIn: (payload: SignInData) => dispatch(signIn(payload))
});

const mapStateToProps = (state: any) => ({
  formState: state.formState
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  SignInForm as any
);
