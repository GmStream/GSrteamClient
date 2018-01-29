export interface ISignUpForm {
  error?: any;
  email?: string;
  channelName?: string;
  username?: string;
  password?: string;
  step?: number;
}

export type SignUpInitialState = ISignUpForm;
