export interface IForm {
  state?: boolean;
  message?: string;
}

export interface IAppData {
  error?: {
    errorCode?: number;
    message?: string;
  };
  selectedStreamId?: string;
  channels: any[];
}

export interface IUserData {
  email?: string;
  name?: string;
  loggedIn: boolean;
  profileImageLink?: string;
}

export type appDataInitial = IAppData;
export type formStateInitial = IForm;
export type userState = IUserData;
