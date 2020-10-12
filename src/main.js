import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
// 轮播图
import "swiper/css/swiper.min.css";
// 全局引入$API
import * as API from "@/api";
// 将API挂载vue实例上,以便全局组件使用
Vue.prototype.$API = API;

Vue.config.productionTip = false;

new Vue({
   beforeCreate() {
     Vue.prototype.$bus = this
   },
  render: (h) => h(App),
  router,
}).$mount("#app");
