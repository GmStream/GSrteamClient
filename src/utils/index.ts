import jwtDecode from 'jwt-decode';

const nameRegExp = new RegExp(`^[a-zA-Zа-яёА-ЯЁ\s\'\-]+$`);
const passwordRegExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$');
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const channelRegExp = new RegExp(`^[a-zA-Zа-яёА-ЯЁ0-9\s\'\-]+$`);

export const checkEmail = (email: string) => {
  return emailRegExp.test(email);
};

export const checkPassword = (password: string) => {
  return passwordRegExp.test(password);
};

export const checkChannelName = (channelName: string) => {
  return channelRegExp.test(channelName);
};

export const checkUserName = (name: string) => {
  return nameRegExp.test(name);
};

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};
