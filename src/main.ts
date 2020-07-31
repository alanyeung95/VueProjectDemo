import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(Vuetify);

const vuetifyOptions = {};
new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: (h) => h(App),
}).$mount("#app");
