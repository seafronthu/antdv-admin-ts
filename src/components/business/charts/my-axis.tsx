/** 坐标轴配置 **/
import { Component, Vue, Prop } from "vue-property-decorator";
import { clearUndefined } from "./core";
import {
  AxisCfg,
  ComponentAnimateOption,
  AxisGridCfg
} from "@antv/g2/lib/interface";
import { AxisLabelCfg, AxisLineCfg } from "@antv/g2/lib/dependents";
@Component
export default class MyAxis extends Vue<AxisCfg> {
  /** data **/
  /** prop **/
  @Prop({
    type: String
  })
  animate?: boolean; // 动画开关，默认开启。
  @Prop({
    type: String
  })
  animateOption?: ComponentAnimateOption; // 动画参数配置。
  @Prop({
    type: Object
  })
  grid?: AxisGridCfg | null; // 坐标轴网格线的配置项，null 表示不展示
  @Prop({
    type: Object
  })
  label?: AxisLabelCfg | null; // 文本标签的配置项，null 表示不展示。
  @Prop({
    type: Object
  })
  line?: AxisLineCfg | null; // 坐标轴线的配置项，null 表示不展示。
  @Prop({
    type: String,
    validator: val => ["top", "bottom", "right", "left"].includes(val)
  })
  position?: "top" | "bottom" | "right" | "left"; // 坐标轴线的配置项，null 表示不展示。
  /** computed **/
  get allAttrs() {
    return clearUndefined({
      ...this.$props,
      ...this.$attrs
    });
  }
  /** watch **/
  /** methods **/
  /** lifecle **/
  /** render **/
  render() {
    return <div></div>;
  }
}
