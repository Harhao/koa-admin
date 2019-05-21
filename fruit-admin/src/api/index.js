import axios from "axios";
import store from "../store/index.js";
import * as types from "../store/types.js";
import router from "../router/index.js";
import Message from '../plugins/el_message/main.js';
import {baseURL,timeout} from './config.js';
axios.defaults.timeout = timeout;
axios.defaults.baseURL = baseURL;
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `Token ${store.state.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.data.response) {
      const message = error.data.response.message;
      Message.error(message);
      switch (error.data.response.status) {
        case 401:
          store.commit("types.LOGOUT");
          router.replace({
            path: "login",
            query: {
              redirect: router.currentRoute.path
            }
          });
      }
    }
    return Promise.reject(error);
  }
);
export const gl_ajax = (params)=>{
   return axios({
     method: params.method.toLowerCase(),
     url: `${axios.defaults.baseURL}${params.url}`,
     data: params.method.toLowerCase() === 'get'?params.data:{},
     params: params.method.toLowerCase() !== 'get'?params.data:{}
   }).then(res=>{
     params.success && params.success(res)
   }).catch(error=>{
     params.error && params.error(error)
   });
}
