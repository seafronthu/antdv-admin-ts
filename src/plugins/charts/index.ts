import MyChart from "./my-chart";
import MyCreateView from "./my-create-view";
import Mixin from "./mixin";
import { VueConstructor } from "vue";
import { viewComponents } from "./core";
let components: { [key: string]: typeof Mixin } = {};
viewComponents.forEach(v => {
  let my = `my-${v}`;
  components[my] = Mixin;
});
export default function install(vm: VueConstructor) {
  vm.component("my-chart", MyChart);
  vm.component("my-create-view", MyCreateView);
  vm.component("my-area", Mixin);
  Object.keys(components).forEach(v => {
    vm.component(v, components[v]);
  });
}
