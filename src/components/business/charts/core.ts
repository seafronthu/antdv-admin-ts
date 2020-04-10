import { ComponentOptions } from "vue";

const parentCharts = ["chart", "createView"];
const series = ["line", "area", "pie", "point", "bar"];
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
  if (!suffix) {
    throw Error("parent component is not exist");
  }
  let suffixName: string = suffix[1];
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
    throw Error("parent component is not exist");
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
  if (!parentCharts.includes(suffixName)) {
    throw Error("parent component is not exist");
  }
  return suffixName;
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
