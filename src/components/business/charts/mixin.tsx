/** 注释 **/
import { Component, Vue, Prop, InjectReactive } from "vue-property-decorator";
import { clearUndefined, getChartComponentTag, OptionsINF } from "./core";
@Component
export default class Mixin extends Vue {
  /** data **/
  @InjectReactive("viewOptions")
  viewOptions!: any[];
  @InjectReactive("chartOptions")
  chartOptions!: any[];
  /** prop **/
  /** computed **/
  get allAttrs() {
    return clearUndefined({
      ...this.$attrs
    });
  }
  /** watch **/
  /** methods **/
  init() {
    // const parentComponentTagName = getChartComponentTag(
    //   this.$parent.$options as OptionsINF
    // );
    // const currentComponentTagName = getChartComponentTag(
    //   this.$options as OptionsINF
    // );
    // if (parentComponentTagName === "createView") {
    //   this.viewOptions;
    // } else if (parentComponentTagName === "chart") {
    // }
  }
  /** lifecle **/
  /** render **/
}
