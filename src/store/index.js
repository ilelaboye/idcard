import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    endpoint: process.env.VUE_APP_ENDPOINT,
    frontend_baseurl: process.env.VUE_APP_FRONTEND,
    // notification: {
    //   type: 0,
    //   message: "",
    // },
    user: null,
    token: "",
    loader: false,
  },
  getters,
  mutations,
  actions,
});

export default store;
