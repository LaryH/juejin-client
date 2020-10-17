export default {
  state: {
    isLogin: false,
  },
  mutations: {
    ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    getIsLogin({ commit }, isLogin) {
      commit("ISLOGIN", isLogin);
    },
  },
};
