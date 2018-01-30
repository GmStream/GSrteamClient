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

export interface IConfirmationData {
  token: string;
}

export type SignUpData = ISignUpData;
export type SignInData = ISignInData;
export type ConfPayload = IConfirmationData;
