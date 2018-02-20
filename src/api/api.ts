import axios from 'axios';
import * as interfaces from '../models/interfaces';

const API = 'localhost:2999';

import * as io from 'socket.io-client';

export const socket = io.connect(`http://localhost:2999/`);

export const signUp = (payload: any) => axios.post(`http://${API}/api/user/signup`, payload);

export const signIn = (payload: any) => axios.post(`http://${API}/api/user/signin`, payload);

export const confirm = (payload: any) => axios.post(`http://${API}/api/user/confirm`, payload);

export const connectToChatRoom = (payload: any) => {
  socket.emit('connect to room', payload);
};

export const sendMessage = (payload: any) => {
  socket.emit('message', payload);
};
