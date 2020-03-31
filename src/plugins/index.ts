import handleRouter from "./handle-router";
import collectErrorLog from "./collect-error-log";
import modified from "./modified";
import { VueConstructor } from "vue";
export default function(vm: VueConstructor, options: object) {
  handleRouter(vm);
  modified(vm);
  collectErrorLog(vm);
}
