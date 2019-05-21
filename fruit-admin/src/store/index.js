import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    [types.LOGOUT]: (state, data) => {
      sessionStorage.removeItem("token");
      state.token = null;
    }，
    [types.LOGIN]: (state, data) => {
      sessionStorage.setItem("token",data);
      state.token = data;
    }
  },
  actions: {},
  getters: {}
});
