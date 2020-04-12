/** 视图 **/
import {
  Component,
  Vue,
  ProvideReactive,
  InjectReactive,
  Prop
} from "vue-property-decorator";
import { OptionsINF, getChartComponentTag, clearUndefined } from "./core";
@Component
export default class MyCreateView extends Vue {
  /** data **/
  @InjectReactive("chartOptions")
  chartOptions!: GLOBAL.MapINF<any>;
  @ProvideReactive("viewOptions")
  viewOptions: GLOBAL.MapINF<any> = {};
  /** prop **/
  @Prop({
    type: Array
  })
  data!: any;
  /** computed **/
  get allAttrs() {
    return clearUndefined({
      ...this.$attrs
    });
  }
  /** watch **/
  /** methods **/
  init() {
    const parentComponentTagName = getChartComponentTag(
      this.$parent.$options as OptionsINF
    );
    if (parentComponentTagName !== "chart") {
      throw Error("Parent Component is not chart!");
    }
    const currViewOptions = {
      ...this.viewOptions,
      options: this.allAttrs,
      data: this.data
    };
    if (this.chartOptions["createView"]) {
      this.chartOptions["createView"].push(currViewOptions);
    } else {
      this.chartOptions["createView"] = [currViewOptions];
    }
  }
  /** lifecle **/
  mounted() {
    this.init();
  }
  /** render **/
  render() {
    let def = this.$scopedSlots.default && this.$scopedSlots.default({});
    return <div style="display: none;">{def}</div>;
  }
}
