import jwtDecode from 'jwt-decode';

import { UserData } from 'models/interfaces';
import { AUTH_TOKEN_IDENTIFICATOR } from '../config';

const nameRegExp = new RegExp(`^[a-zA-Zа-яёА-ЯЁ\s\'\-]+$`);
const passwordRegExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$');
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const channelRegExp = new RegExp(`^[a-zA-Zа-яёА-ЯЁ0-9\s\'\-]+$`);

export interface ICheck {
  checkEmail: (email: string) => boolean;
  checkPassword: (password: string) => boolean;
  checkChannelName: (channelName: string) => boolean;
  checkUserName: (name: string) => boolean;
}

// namespace for all checks

export const checks: ICheck = {
  checkEmail: (email: string) => {
    return emailRegExp.test(email);
  },

  checkPassword: (password: string) => {
    return passwordRegExp.test(password);
  },

  checkChannelName: (channelName: string) => {
    return channelRegExp.test(channelName);
  },

  checkUserName: (name: string) => {
    return nameRegExp.test(name);
  }
};

export const decodeToken = (token: string): UserData => {
  return jwtDecode(token);
};

export const saveSessionTokeToLS = (token: string) => {
  window.localStorage.setItem(AUTH_TOKEN_IDENTIFICATOR, token);
};

export const removeSessionTokenFromLS = () => {
  window.localStorage.removeItem(AUTH_TOKEN_IDENTIFICATOR);
};

export const refreshSessionToken = (token: string) => {
  removeSessionTokenFromLS();
  saveSessionTokeToLS(token);
};

export const getSesionTokenFromLS = () => {
  return window.localStorage.getItem(AUTH_TOKEN_IDENTIFICATOR);
};
