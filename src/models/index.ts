export interface IForm {
  state?: boolean;
  message?: string;
}

export interface IAppError {
  errorCode?: number;
  message?: string;
}

export interface IUserData {
  email?: string;
  name?: string;
}

export type appErrorInitial = IAppError;
export type formStateInitial = IForm;
export type userState = IUserData;
