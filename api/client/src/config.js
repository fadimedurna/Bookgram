import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://bookgram-app.herokuapp.com/api/',
});