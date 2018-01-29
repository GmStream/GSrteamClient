import axios from 'axios';
import * as interfaces from '../models/interfaces';

const API = 'localhost:3000';

export const sgnUp = (payload: any) => axios.post(`http://${API}/api/user/signup`, payload);
