import axios from 'axios';
import { BASE_URL, READ_ACCESS_TOKEN } from '../constants/constants';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default API;
