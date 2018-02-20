import axios from 'axios';
import * as interfaces from '../models/interfaces';

const API = 'localhost:2999';

import * as io from 'socket.io-client';
const socket = io.connect(`http://localhost:2999/`);
window.console.log(socket);

export const signUp = (payload: any) => axios.post(`http://${API}/api/user/signup`, payload);

export const signIn = (payload: any) => axios.post(`http://${API}/api/user/signin`, payload);

export const confirm = (payload: any) => axios.post(`http://${API}/api/user/confirm`, payload);
