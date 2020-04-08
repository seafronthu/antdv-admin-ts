import { ComponentOptions } from "vue";

const parentCharts = ["chart"];
interface OptionsINF extends ComponentOptions<Vue> {
  _componentTag: string;
}
interface VueComponent extends Vue {
  $options: OptionsINF;
}
export function isParentChart(componentInstance: VueComponent) {
  const componentTag = componentInstance.$options._componentTag;
  const componentTagName = splitName(componentTag);
  return (
    componentTagName &&
    parentCharts.includes(componentInstance.$options._componentTag)
  );
}
export function splitName(name: string) {
  return name.split("-")[1];
}
export function clearUndefined(
  options: GLOBAL.MapINF<string | (string | null)[] | null | undefined>
) {
  let newOptions: GLOBAL.MapINF<
    string | (string | null)[] | null | undefined
  > = {};
  Object.keys(options).forEach(v => {
    if (options[v] !== void 0) {
      newOptions[v] = options[v];
    }
  });
  return newOptions;
}
