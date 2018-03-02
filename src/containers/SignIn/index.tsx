import { connect, Dispatch } from 'react-redux';
import * as appActions from '../../actions/appActions';
import { FormActions } from '../../actions/formActions';
import * as formActions from '../../actions/formActions';
import SignInForm from '../../components/SignInForm';
import { ConfPayload, SignInData, UserData } from '../../models/interfaces';

export interface IStateToProps {
  formState: any;
  userData: any;
  appData: any;
}

export interface IDispatchFromProps {
  handleEmailConfirmation: (payload: ConfPayload) => void;
  signIn: (payload: SignInData) => void;
  continueSession: (payload: UserData) => void;
  setUserData: (payload: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<FormActions>) => ({
  continueSession: (payload: UserData) => dispatch(appActions.continueSession(payload)),
  handleEmailConfirmation: (payload: ConfPayload) =>
    dispatch(formActions.emailConfirmation(payload)),
  setUserData: (payload: any) => dispatch(appActions.setUserData(payload)),
  signIn: (payload: SignInData) => dispatch(formActions.signIn(payload))
});

const mapStateToProps = (state: any) => ({
  appData: state.appData,
  formState: state.formState,
  userData: state.userData
});

export default connect<IStateToProps, IDispatchFromProps>(mapStateToProps, mapDispatchToProps)(
  SignInForm as any
);
