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

export interface IUserData {
  email: string;
  name: string;
  profileImageLink?: string;
  loggedIn?: boolean;
}

export interface ISessionData {
  token: string;
}

export type SignUpData = ISignUpData;
export type SignInData = ISignInData;
export type ConfPayload = IConfirmationData;
export type UserData = IUserData;
export type SessionData = ISessionData;
