import Vue from "vue";
import App from "./App.vue";

// Add Reset Sass
import "./styles/reset.scss";
import "./styles/utils.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
