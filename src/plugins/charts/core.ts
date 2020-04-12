import { ComponentOptions } from "vue";

const parentCharts = ["chart", "createView"];
const series = ["line", "area", "pie", "point", "bar", "interval"];
export const viewComponents = [
  "line",
  "area",
  "pie",
  "point",
  "bar",
  "interval",
  "tooltip",
  "coordinate",
  "annotation",
  "legend",
  "axis",
  "scale"
];
export interface OptionsINF extends ComponentOptions<Vue> {
  _componentTag: string;
}
export function getChartComponentTag(options: OptionsINF) {
  const componentTag = options._componentTag;
  return splitName(componentTag);
}
export function isParentChart(options: OptionsINF) {
  const componentTagName = getChartComponentTag(options);
  return componentTagName;
}
export function splitName(name: string) {
  const suffix = name.split("-");
  let suffixName: string = suffix.slice(1).join("-");
  // 如果组件名是驼峰 则驼峰转-
  if (suffix.length === 1) {
    suffixName = suffix[0].replace(/([A-Z])/g, (p1, p2, offset) => {
      return offset === 0
        ? p1.toLocaleLowerCase()
        : `-${p1.toLocaleLowerCase()}`;
    });
    suffixName = suffixName.replace(/[a-z]-/, "");
  }
  if (!suffixName) {
    throw Error("current component is not exist");
  }
  suffixName = suffixName.replace(/-(\w)/g, (p1, p2) => {
    return p2.toUpperCase();
  });
  // -转驼峰变成function
  // suffixName = suffix[1].reduce((accumulator, currentValue) => {
  //   return (
  //     accumulator +
  //     (currentValue
  //       ? currentValue.replace(/-(\w)/g, (p1, p2) => {
  //           return p2.toUpperCase();
  //         })
  //       : "")
  //   );
  // });
  return suffixName;
}
export function clearUndefined(options: GLOBAL.MapINF<any>) {
  let newOptions: GLOBAL.MapINF<any> = {};
  Object.keys(options).forEach(v => {
    if (options[v] !== void 0) {
      newOptions[v] = options[v] as GLOBAL.MapINF<any>;
    }
  });
  return newOptions;
}
export function paramsTurnArray(param: any): any[] {
  if (Array.isArray(param)) {
    return param;
  }
  return [param];
}
export function chainFunc(target: any, obj: GLOBAL.MapINF<any>) {
  let arr = Object.keys(obj);
  let finished = arr.length - 1;
  let i = -1;
  while (i++ < finished) {
    let key = arr[i];
    if (key === "options") {
      continue;
    }
    target[key].apply(target, paramsTurnArray(obj[key]));
  }
}
