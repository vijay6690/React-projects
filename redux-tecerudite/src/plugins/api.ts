import axios from "axios";
// import * as utils from '../utils';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});
// const API = axios.create({baseURL: utils.isServer() ? 'http://localhost:3000/api' : '/api', withCredentials: true});
//const API = axios.create({ baseURL: utils.isServer() ? `http://localhost:${process.env.PORT}/api` : '/api', withCredentials: true });

// API.interceptors.request.use((config) => {
//   debugger
//   /** In dev, intercepts request and logs it into console for dev */
//   config.headers.common["Content-Type"] = 'application/json'
//   return config;
// }, (error) => {

//   return Promise.reject(error);
// });

export default API;
