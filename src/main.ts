import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./stores";
import Element from "element-ui";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import plugins from "@/plugins";
import "@a/css/init.styl";
import "@a/css/common.styl";
import "@a/css/animate.styl";
import "element-ui/lib/theme-chalk/index.css";
import "@/mocks/index.js";
import "@a/js/global.js";
import ContainerFluid from "@b/container-fluid";
Vue.use(Element);
Vue.use(Antd);
Vue.use(plugins);
Vue.component("ContainerFluid", ContainerFluid);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
