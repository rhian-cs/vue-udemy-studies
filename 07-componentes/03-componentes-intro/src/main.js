import Vue from "vue";
import App from "./App.vue";
import MyCounter from "./MyCounter.vue";
import MyCounters from "./MyCounters.vue";

Vue.config.productionTip = false;
Vue.component("MyCounter", MyCounter);
Vue.component("MyCounters", MyCounters);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
