export interface ISignUpData {
  channelName: string;
  email: string;
  name: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export type SignUpData = ISignUpData;
export type SignInData = ISignInData;
