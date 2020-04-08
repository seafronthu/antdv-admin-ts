/** 注释 **/
// interface ChartOptions{

// }
import { Component, Vue, Prop } from "vue-property-decorator";
// import { Chart } from "@antv/g2";
export default class MyChart extends Vue {
  /** data **/
  $refs!: {
    container: HTMLDivElement;
  };
  // chartOptions =
  /** prop **/
  @Prop({
    type: Array,
    default: () => []
  })
  data!: any[]; // 数据
  @Prop({
    type: Boolean,
    default: false
  })
  autoFit!: boolean; // 是否自适应 DOM 容器宽高，默认为 false，需要用户手动指定宽高
  @Prop({
    type: Number
  })
  height?: number; // 图表高度
  @Prop({
    type: Number
  })
  width?: number; // 图表宽度
  @Prop({
    type: [String, Number, String]
  })
  padding?: number | number[] | "auto"; // view 的 padding 大小
  // @Prop({
  //   type: Function,
  //   default: (chart: Chart) => {}
  // })
  // chart!: (chart: Chart) => void; // view 的 padding 大小
  /** computed **/
  /** watch **/
  /** methods **/
  // init() {
  //   const container = this.$refs["container"];
  //   const { height, padding, width, autoFit, data } = this;
  //   let chart = new Chart({
  //     container,
  //     autoFit,
  //     width,
  //     height,
  //     padding
  //   });
  //   if (data.length > 0) {
  //     chart.data(data);
  //   }
  //   this.chart(chart);
  // }
  /** lifecle **/
  /** render **/
  render() {
    return <div ref="container"></div>;
  }
}
