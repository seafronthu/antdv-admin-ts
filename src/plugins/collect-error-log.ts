import { appModule } from "@s/index";
import { VueConstructor } from "vue";
export default function install(
  Vue: VueConstructor,
  options?: { developmentOff: boolean }
) {
  Vue.config.errorHandler = (error, vm, mes) => {
    let info = {
      type: "script",
      name: error.name,
      message: error.message,
      href: window.location.href
    };
    Vue.nextTick(() => {
      appModule.APP_ADDERRORLOG_ACTION(info);
    });
  };
}
