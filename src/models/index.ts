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
}

export interface IUserData {
  email?: string;
  name?: string;
  loggedIn: boolean;
}

export type appDataInitial = IAppData;
export type formStateInitial = IForm;
export type userState = IUserData;
