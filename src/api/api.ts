import axios from 'axios';
import * as interfaces from '../models/interfaces';

const API = 'localhost:2999';

import * as io from 'socket.io-client';

// fix socket connection (HT)
// err: connct with every import
export let socket: SocketIOClient.Socket;

export const signUp = (payload: any) => axios.post(`http://${API}/api/user/signup`, payload);

export const signIn = (payload: any) => axios.post(`http://${API}/api/user/signin`, payload);

export const confirm = (payload: any) => axios.post(`http://${API}/api/user/confirm`, payload);

export const loadChannels = (payload: any) => axios.post(`http://${API}/api/channel/load`, payload);

export const getStreamIdForCurrentUser = (payload: any) =>
  axios.post(`http://${API}/api/stream/get_user_stream_key`, payload);

export const connect = () => {
  socket = io.connect(`http://${API}`);
};

export const check = (payload: any) =>
  axios.post(`http://${API}/api/channel/check_stream`, payload);

export const startStream = (payload: any) =>
  axios.post(`http://${API}/api/stream/start_stream`, payload);

export const stopStream = (payload: any) =>
  axios.post(`http://${API}/api/stream/stop_stream`, payload);

export const connectToChatRoom = (payload: any) => {
  if (socket) {
    socket.emit('join_room', payload);
  }
};

export const sendRoomMessage = (payload: any) => {
  if (socket) {
    socket.emit('room_message', payload);
  }
};

export const leaveChatRoom = (payload: any) => {
  if (socket) {
    socket.emit('leave_room', payload);
  }
};

export const disconnect = () => {
  if (socket) {
    socket.emit('disconnect');
  }
};
