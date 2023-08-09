import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    endpoint: process.env.VUE_APP_ENDPOINT,
    base_url: process.env.VUE_APP_BASE_URL,
    // notification: {
    //   type: 0,
    //   message: "",
    // },
    user: null,
    token: "",
    loader: false,
    cart: [],
    jumiaSearch: "office accessories",
  },
  getters,
  mutations,
  actions,
});

export default store;
