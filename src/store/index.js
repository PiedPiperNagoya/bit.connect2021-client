import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart_lists:[],
    latest_product:{}
  },
  mutations: {
    appendCart (state, product) {
      state.cart_lists.push(product);

    },
    updateLatestProduct(state, product) {
      state.latest_product = product;
    }
  },
  actions: {},
  modules: {},
});
