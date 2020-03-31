import { Vue, Component } from "vue-property-decorator";
import { deviceEnquire } from "./device";
import { appModule } from "@s/index";
// 全局使用的方法
@Component
class Mixin extends Vue {
  created() {
    deviceEnquire(deviceType => {
      appModule.APP_TOGGLEDEVICE_MUTATE(deviceType);
    });
  }
}
export { Mixin };
