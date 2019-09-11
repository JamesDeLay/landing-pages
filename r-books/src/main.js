import Vue from "vue";
import App from "./App.vue";

// Add Tailwind CSS
import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
